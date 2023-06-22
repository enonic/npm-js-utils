import {isString} from '../../../value/isString';
import {toStr} from '../../../value/toStr';


export enum CHAR {
	DOT = 46,
	FORWARD_SLASH = 47,
	COLON = 58,
	UPPERCASE_A = 65,
	BACKWARD_SLASH = 92,
	UPPERCASE_Z = 90,
	LOWERCASE_A = 97,
	LOWERCASE_Z = 122,
}

export function isPathSeparator(code: number) {
	return code === CHAR.FORWARD_SLASH || code === CHAR.BACKWARD_SLASH;
}

export function isPosixPathSeparator(code: number) {
	return code === CHAR.FORWARD_SLASH;
}

export function isWindowsDeviceRoot(code: number) {
	return (code >= CHAR.UPPERCASE_A && code <= CHAR.UPPERCASE_Z) ||
		   (code >= CHAR.LOWERCASE_A && code <= CHAR.LOWERCASE_Z);
}

export function StringPrototypeCharCodeAt(str: string, i: number) {
	return str.charCodeAt(i)
}

export function StringPrototypeLastIndexOf(str: string, separator: string) {
	return str.lastIndexOf(separator);
}

export function StringPrototypeSlice(str: string, start: number, end?: number) {
	return str.slice(start, end);
}

function normalizeString(path, allowAboveRoot, separator, isPathSeparator) {
	let res = '';
	let lastSegmentLength = 0;
	let lastSlash = -1;
	let dots = 0;
	let code = 0;
	for (let i = 0; i <= path.length; ++i) {
		if (i < path.length)
			code = StringPrototypeCharCodeAt(path, i);
		else if (isPathSeparator(code))
			break;
		else
			code = CHAR.FORWARD_SLASH;

		if (isPathSeparator(code)) {
			if (lastSlash === i - 1 || dots === 1) {
			// NOOP
			} else if (dots === 2) {
				if (res.length < 2 || lastSegmentLength !== 2 ||
				StringPrototypeCharCodeAt(res, res.length - 1) !== CHAR.DOT ||
				StringPrototypeCharCodeAt(res, res.length - 2) !== CHAR.DOT) {
					if (res.length > 2) {
						const lastSlashIndex = StringPrototypeLastIndexOf(res, separator);
						if (lastSlashIndex === -1) {
							res = '';
							lastSegmentLength = 0;
						} else {
							res = StringPrototypeSlice(res, 0, lastSlashIndex);
							lastSegmentLength =
							res.length - 1 - StringPrototypeLastIndexOf(res, separator);
						}
						lastSlash = i;
						dots = 0;
						continue;
					} else if (res.length !== 0) {
						res = '';
						lastSegmentLength = 0;
						lastSlash = i;
						dots = 0;
						continue;
					}
				}
				if (allowAboveRoot) {
					res += res.length > 0 ? `${separator}..` : '..';
					lastSegmentLength = 2;
				}
			} else {
				if (res.length > 0)
					res += `${separator}${StringPrototypeSlice(path, lastSlash + 1, i)}`;
				else
					res = StringPrototypeSlice(path, lastSlash + 1, i);
				lastSegmentLength = i - lastSlash - 1;
			}
			lastSlash = i;
			dots = 0;
		} else if (code === CHAR.DOT && dots !== -1) {
			++dots;
		} else {
			dots = -1;
		}
	}
	return res;
}


export default function normalize(path: string) {
	if (!isString(path)) {
		throw new TypeError('Path must be a string. Received ' + toStr(path));
	}
	const len = path.length;
	if (len === 0) {
		return '.';
	}
	let rootEnd = 0;
	let device;
	let isAbsolute = false;
	const code = StringPrototypeCharCodeAt(path, 0);

	if (len === 1) {
		return isPosixPathSeparator(code) ? '\\' : path;
	}
	if (isPathSeparator(code)) {
		isAbsolute = true;

		if (isPathSeparator(StringPrototypeCharCodeAt(path, 1))) {
			let j = 2;
			let last = j;
			while (j < len &&
				!isPathSeparator(StringPrototypeCharCodeAt(path, j))) {
				j++;
			}
			if (j < len && j !== last) {
				const firstPart = StringPrototypeSlice(path, last, j);
				last = j;
				while (j < len &&
					isPathSeparator(StringPrototypeCharCodeAt(path, j))) {
					j++;
				}
				if (j < len && j !== last) {
					last = j;
					while (j < len &&
					!isPathSeparator(StringPrototypeCharCodeAt(path, j))) {
						j++;
					}
					if (j === len) {
						return `\\\\${firstPart}\\${StringPrototypeSlice(path, last)}\\`;
					}
					if (j !== last) {
						device =
						`\\\\${firstPart}\\${StringPrototypeSlice(path, last, j)}`;
						rootEnd = j;
					}
				}
			}
		} else {
			rootEnd = 1;
		}
	} else if (isWindowsDeviceRoot(code) &&
		StringPrototypeCharCodeAt(path, 1) === CHAR.COLON) {
		// Possible device root
		device = StringPrototypeSlice(path, 0, 2);
		rootEnd = 2;
		if (len > 2 && isPathSeparator(StringPrototypeCharCodeAt(path, 2))) {
			// Treat separator following drive name as an absolute path
			// indicator
			isAbsolute = true;
			rootEnd = 3;
		}
	}

	let tail = rootEnd < len ?
		normalizeString(StringPrototypeSlice(path, rootEnd),
			!isAbsolute, '\\', isPathSeparator) :
		'';
	if (tail.length === 0 && !isAbsolute)
		tail = '.';
	if (tail.length > 0 &&
			isPathSeparator(StringPrototypeCharCodeAt(path, len - 1)))
		tail += '\\';
	if (device === undefined) {
		return isAbsolute ? `\\${tail}` : tail;
	}
	return isAbsolute ? `${device}\\${tail}` : `${device}${tail}`;
}

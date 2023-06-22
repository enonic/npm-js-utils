// import {join} from './join';
import {isString} from '../../../value/isString';
import {toStr} from '../../../value/toStr';
import normalize, {
	CHAR,
	isPathSeparator,
	isWindowsDeviceRoot,
	StringPrototypeCharCodeAt,
	StringPrototypeSlice,
} from './normalize';


export function dirname(
	path: string,
	//separator: string = '/'
): string {
	if (!isString(path)) {
		throw new TypeError('Path must be a string. Received ' + toStr(path));
	}

	const len = path.length;
	if (len === 0) {
		console.debug('HERE 1');
		return '.';
	}

	const code = path.charCodeAt(0);
	if (len === 1) {
		console.debug('HERE 2');
		return isPathSeparator(code) ? path : '.';
	}

	let rootEnd = -1;
	let offset = 0;
	if (isPathSeparator(code)) {
		rootEnd = offset = 1;

		if (isPathSeparator(StringPrototypeCharCodeAt(path, 1))) {
			let j = 2;
			let last = j;
			while (j < len &&
					!isPathSeparator(StringPrototypeCharCodeAt(path, j))) {
				j++;
			}
			if (j < len && j !== last) {
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
						console.debug('HERE 3');
						return path;
					}
					if (j !== last) {
						rootEnd = offset = j + 1;
					}
				}
			}
		}
	} else if (isWindowsDeviceRoot(code) &&
		StringPrototypeCharCodeAt(path, 1) === CHAR.COLON) {
		rootEnd = len > 2 && isPathSeparator(StringPrototypeCharCodeAt(path, 2)) ? 3 : 2;
		offset = rootEnd;
	}

	let end = -1;
	let matchedSlash = true;
	for (let i = len - 1; i >= offset; --i) {
		if (isPathSeparator(StringPrototypeCharCodeAt(path, i))) {
			if (!matchedSlash) {
				end = i;
				break;
			}
		} else {
			matchedSlash = false;
		}
	}
	if (end === -1) {
		if (rootEnd === -1) {
			console.debug('HERE 4');
			return '.';
		}
		end = rootEnd;
	}
	console.debug('HERE 5');
	return normalize(StringPrototypeSlice(path, 0, end));
	//return join([path, '..'], separator);
}

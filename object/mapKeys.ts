import { isObject } from '../value/isObject';
import { toStr } from '../value/toStr';

export default function mapKeys(
	obj: object,
	fn: ({
		key,
		result,
		value
	}: {
		key: PropertyKey
		result: object
		value: unknown
	}) => void
): object {
	if (!isObject(obj)) {
		throw new TypeError(`mapKeys: First param must be an object! got:${toStr(obj)}`);
	}
	const result = {};
	const keys = Object.keys(obj);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		fn({
			key,
			result,
			value: obj[key]
		});
	}
	return result;
}

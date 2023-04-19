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

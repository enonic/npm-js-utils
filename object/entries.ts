export function entries(obj: object): [PropertyKey, unknown][] {
	return Object.keys(obj).map((key: PropertyKey) => [key, obj[key]]);
}

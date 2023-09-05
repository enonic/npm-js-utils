export function values(obj: object): unknown[] {
	return Object.keys(obj).map((key) => obj[key]);
}

export function forceArray<T>(data :T | Array<T>) :Array<T> {
	return (Array.isArray(data) ? data : [data]);
}

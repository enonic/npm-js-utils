export function forceArray(data :unknown) :Array<unknown> {
	return (Array.isArray(data) ? data : [data]);
}

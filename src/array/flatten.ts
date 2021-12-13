type NestedArray<T> = Array<NestedArray<T> | T>;


export function flatten<T>(
	arr :NestedArray<T>,
	d :number = 1
) :unknown[] {
	return d > 0
		? arr.reduce((
			acc :unknown[],
			val
		) => acc.concat(
			Array.isArray(val)
				? flatten(val, d - 1)
				: val
		), [])
		: arr.slice();
}

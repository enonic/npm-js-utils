export function flatten(
	arr :unknown[],
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

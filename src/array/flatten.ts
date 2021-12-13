export function flatten(arr :Array<unknown>, d :number = 1 ) :Array<unknown> {
   return d > 0
   	? arr.reduce((acc :any[], val) => acc.concat(
		Array.isArray(val)
			? flatten(val, d - 1)
			: val
		), [])
    : arr.slice();
};

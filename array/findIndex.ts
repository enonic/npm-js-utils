export function findIndex<
	Element = unknown
>(
	array: Element[],
	callbackFn: (
		element: Element,
		index?: number,
		array?: Element[]
	) => boolean
): number {
	const length = array.length >>> 0;
	//const thisArg = arguments[1];
	for (let i = 0; i < length; i++) {
		//if ( (callbackFn as FindIndexCallback).call(thisArg, array[i], i, array) ) {
		if ( callbackFn(array[i], i, array) ) {
			return i;
		}
	}
	return -1;
}

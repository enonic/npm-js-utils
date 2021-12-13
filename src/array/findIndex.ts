type FindIndexCallback = (
	element :unknown,
	index :number,
	array:unknown[]
) => boolean;


export function findIndex(
	array :unknown[],
	callback :FindIndexCallback
) :number {
	const length = array.length >>> 0;
	for (let i = 0; i < length; i++) {
		if ( callback(array[i], i, array) ) {
			return i;
		}
	}
	return -1;
}

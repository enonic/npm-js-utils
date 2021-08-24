export function findIndex(array :Array<unknown>, callback :Function) {
	var length = array.length >>> 0;
	var thisArg = arguments[1];
	for (var i = 0; i < length; i++) {
		if ( callback.call(thisArg, array[i], i, array) ) {
			return i;
		}
	}
	return -1;
}

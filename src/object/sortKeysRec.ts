const {isArray} = Array;
const {keys} = Object;


export function sortKeysRec<T extends Object>(obj :T) :T {
	if (isArray(obj)) {
		const newArray = [];
		for (let i = 0, l = obj.length; i < l; i++) {
			newArray[i] = sortKeysRec(obj[i]); // Recurse
		}
		return newArray as unknown as T;
	}
	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}
	const sortedKeys = keys(obj).sort();
	const newObject = {} as T;
	for (let i = 0, l = sortedKeys.length; i < l; i++) {
		const k = sortedKeys[i] as keyof T;
		newObject[k] = sortKeysRec(obj[k]); // Recurse
	}
	return newObject;
}

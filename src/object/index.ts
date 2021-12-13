const {isArray} = Array;
const {keys} = Object;


export function sortKeys(obj: object) :object {
	if (typeof obj !== 'object' || isArray(obj)) {
		throw new Error('sortKeys');
	}
	const newObject = {};
	const sortedKeys :string[] = keys(obj).sort();
	for (let i = 0, l = sortedKeys.length; i < l; i++) {
		const k :string = sortedKeys[i] as string;
		newObject[k] = obj[k];
	}
    return newObject;
}


export function sortKeysRec(obj :unknown) :unknown {
	if (isArray(obj)) {
        const newArray :unknown[] = [];
        for (let i = 0, l = obj.length; i < l; i++)
            newArray[i] = sortKeysRec(obj[i]); // Recurse
        return newArray;// as [];
    }
    if (typeof obj !== 'object' || obj === null)
        return obj;// as unknown;
    const sortedKeys = keys(obj).sort();
    const newObject = {};
    for (let i = 0, l = sortedKeys.length; i < l; i++) {
		const k :string = sortedKeys[i] as string;
		newObject[k] = sortKeysRec(obj[k]); // Recurse
	}
    return newObject;// as object;
}

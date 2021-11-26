const {isArray} = Array;
const {keys} = Object;


export function sortKeys(obj :unknown) :unknown {
	if (isArray(obj)) {
        const newArray = [];
        for (let i = 0, l = obj.length; i < l; i++)
            newArray[i] = sortKeys(obj[i]); // Recurse
        return newArray;// as [];
    }
    if (typeof obj !== 'object' || obj === null)
        return obj;// as unknown;
    const sortedKeys = keys(obj).sort();
    const newObject = {};
    for (let i = 0, l = sortedKeys.length; i < l; i++)
        newObject[sortedKeys[i]] = sortKeys(obj[sortedKeys[i]]); // Recurse
    return newObject;// as object;
}

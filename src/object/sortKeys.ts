import type {AnyObject} from '../types';


const {isArray} = Array;
const {keys} = Object;


export function sortKeys<T extends AnyObject>(obj: T) :T {
	if (typeof obj !== 'object' || isArray(obj)) {
		throw new Error('sortKeys');
	}
	const newObject = {} as T;
	const sortedKeys = keys(obj).sort();
	for (let i = 0, l = sortedKeys.length; i < l; i++) {
		const k = sortedKeys[i] as keyof T;
		newObject[k] = obj[k];
	}
	return newObject;
}

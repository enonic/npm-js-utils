import {isObject} from '../value/isObject';
import {hasOwnProperty} from './hasOwnProperty';


/*interface ObjectWithStringKeys {
	[k :string] :ObjectWithStringKeys | unknown
}*/

interface ObjectWithPropertyKeys {
	[k :PropertyKey] :ObjectWithPropertyKeys | unknown
}


/*function isObject(value :unknown) :boolean {
  return (typeof value === 'object' && value !== null) || typeof value === 'function';
};*/


function isUnsafeKey(key :PropertyKey) :boolean {
	return key === '__proto__' || key === 'constructor' || key === 'prototype';
}


export function setIn<
	//O extends Object,
	//O extends object,
	//O extends {},
	//O extends ObjectWithStringKeys,
	O/* extends unknown*/,
	//K extends keyof O,
	//K extends keyof O & string,
	//K extends string & keyof O,
	//K extends string,
	K extends PropertyKey, // string | number | symbol
	//V extends O[K]
	V/* extends unknown*/
>(
	target: O,
	path: K | Array<K>,
	value?: V
) :O {
	if (!path || !isObject(target)) return target;

	if (!Array.isArray(path)) {
		path = (path as string).split('.') as Array<K>;
	}

	let leafKey = path[0] as K;
	//console.debug('root k:%s', k);
	if (isUnsafeKey(leafKey)) {
		throw new Error(`setIn: unsafe root key: "${String(leafKey)}"`);
	}

	let obj = target as unknown as ObjectWithPropertyKeys;
	if (path.length > 1) {
		const pathLength = path.length;
		leafKey = path[pathLength - 1] as K;
		//console.debug('leaf k:%s', k);
		if (isUnsafeKey(leafKey)) {
			throw new Error(`setIn: unsafe leaf key: "${String(leafKey)}"`);
		}
		for(let i = 0; i < pathLength - 1; i++) {
			const branchKey = path[i] as K;
			//console.debug('branchKey:%s', branchKey);

			if (isUnsafeKey(branchKey)) {
				throw new Error(`setIn: unsafe branch key: "${String(branchKey)}"`);
			}

			if (!hasOwnProperty(obj, branchKey)) {
				obj[branchKey] = {}; // Add intermediaries
			}

			obj = obj[branchKey] as ObjectWithPropertyKeys; // Step into intermediary
		} // for
	} // if

	// Set or delete value of leaf
	if (typeof value !== 'undefined') {
		obj[leafKey] = value;
	} else {
		delete obj[leafKey];
	}

	return target; // Return the modified target
} // setIn

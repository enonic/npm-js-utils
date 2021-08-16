import {flatten} from '../../array/flatten';
import {
	isDate,
	isFunction,
	isInfinity,
	isObject
} from '../../value';


// NOTE: Recursive
export function enonify(unknown :unknown) :unknown {
	//console.log(typeof unknown);

	function shouldBeDeleted(unknown :unknown) :boolean {
		return unknown === null
			|| typeof unknown === 'undefined'
			|| isFunction(unknown)
			|| isInfinity(unknown)
			|| isNumberButNaN(unknown)
	}

	function enonifyArray(array :Array<unknown>) :unknown {
		const flattenedAndEnonified = flatten(array).map(v=>enonify(v)).filter(v=>!shouldBeDeleted(v)); // NOTE: Recurse
		//console.log('flattenedAndEnonified', flattenedAndEnonified);
		if(flattenedAndEnonified.length === 0) {
			return undefined;
		}
		if(flattenedAndEnonified.length === 1) {
			return flattenedAndEnonified[0];
		}
		return flattenedAndEnonified;
	}

	function isNumberButNaN(unknown: unknown) :boolean {
		return typeof unknown === 'number' && isNaN(unknown as number);
	}

	if (isObject(unknown)) {
		Object.keys(unknown as object).forEach((k) => {
			let value = unknown[k];
			if (Array.isArray(value)) {
				value = enonifyArray(value); // value may longer be an Array. Example: [NaN] -> undefined
			}
			if (Array.isArray(value)) {
				unknown[k] = value; // Shortcircuit: No need to run through Arrays a second time
			} else {
				if (shouldBeDeleted(value)) {
					delete unknown[k];
				} else {
					unknown[k] = enonify(value); // NOTE: Recurse
				}
			}
		}); // forEach
		return unknown;
	}

	if (Array.isArray(unknown)) {
		return enonifyArray(unknown);
	}

	if (isDate(unknown)) {
		return (unknown as Date).toISOString();
	}

	if(isNumberButNaN(unknown)) {
		return undefined;
	}

	if(isInfinity(unknown)) {
		return undefined;
	}

	return unknown;
}

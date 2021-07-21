import {flatten} from '../../array/flatten';
import {isObject} from '../../value';


function isNumberButNaN(value: unknown) :boolean {
	return typeof value === 'number' && isNaN(value as number);
}


function shouldPropertyBeDeleted(value :unknown) :boolean {
	return value === null || typeof value === 'undefined' || isNumberButNaN(value)
}


// NOTE: Recursive
export function enonify(value :unknown) :unknown {
	//console.log(typeof value);

	if (isObject(value)) {
		Object.keys(value as object).forEach((k) => {
			const propertyValue = value[k];
			if (shouldPropertyBeDeleted(propertyValue)) {
				delete value[k];
			} else {
				// NOTE: Recurse
				value[k] = enonify(propertyValue); // TODO only assign if changed?
			}
		});
		return value;
	}

	if (Array.isArray(value)) {
		const flattened = flatten(value);
		if(flattened.length === 1) {
			return flattened[0];
		}
		return flattened;
	}

	if(isNumberButNaN(value)) {
		return undefined;
	}

	return value;
}

import type {Fields} from '../constants';


import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';
import {includes as stringIncludes} from '../../../string/includes';


export function fieldsContainBoost(fields: Fields): boolean {
	if (Array.isArray(fields)) {
		return fields.some((field) => fieldsContainBoost(field));
	} else if (isObject(fields)) {
		const {boost} = fields;
		if (
			boost // not undefined, null, or 0, -0 and so on
			&& boost !== 1
		) {
			return true;
		}
	} else if (isString(fields)) {
		if (stringIncludes(fields, '^')) {
			return true;
		}
	} else {
		throw new Error(`fieldsContainBoost: fields is not array, object or string!`);
	}
	return false;
}

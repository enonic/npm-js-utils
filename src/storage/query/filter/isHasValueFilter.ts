import type {HasValueFilter} from '/lib/xp/node';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


export function isHasValueFilter(value: unknown): value is HasValueFilter {
	return isObject(value)
		&& hasOwnProperty(value,'hasValue')
		&& isObject(value.hasValue)
		&& hasOwnProperty(value.hasValue,'field')
		&& isString(value.hasValue.field)
		&& hasOwnProperty(value.hasValue,'values')
		&& Array.isArray(value.hasValue.values);
}

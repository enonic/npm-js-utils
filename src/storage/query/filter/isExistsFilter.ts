import type {ExistsFilter} from '/lib/xp/node';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


export function isExistsFilter(value: unknown): value is ExistsFilter {
	return isObject(value)
		&& hasOwnProperty(value,'exists')
		&& isObject(value.exists)
		&& hasOwnProperty(value.exists,'field')
		&& isString(value.exists.field)
}

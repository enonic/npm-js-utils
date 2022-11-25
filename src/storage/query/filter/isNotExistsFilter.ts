import type {NotExistsFilter} from '/lib/xp/node';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


export function isNotExistsFilter(value: unknown): value is NotExistsFilter {
	return isObject(value)
		&& hasOwnProperty(value,'notExists')
		&& isObject(value.notExists)
		&& hasOwnProperty(value.notExists,'field')
		&& isString(value.notExists.field)
}

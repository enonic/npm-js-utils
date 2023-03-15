import type {IdsFilter} from '/lib/xp/node';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


export function isIdsFilter(value: unknown): value is IdsFilter {
	return isObject(value)
		&& hasOwnProperty(value,'ids')
		&& isObject(value.ids)
		&& hasOwnProperty(value.ids,'values')
		&& Array.isArray(value.ids.values)
		&& value.ids.values.every((v: unknown) => isString(v));
}

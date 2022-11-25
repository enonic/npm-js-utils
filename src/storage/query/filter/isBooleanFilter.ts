import type {
	BooleanFilter,
	Filter
} from '/lib/xp/node';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isObject} from '../../../value/isObject';
import {FILTER_CLAUSES} from '../constants';
import {isExistsFilter} from './isExistsFilter';
import {isHasValueFilter} from './isHasValueFilter';
import {isIdsFilter} from './isIdsFilter';
import {isNotExistsFilter} from './isNotExistsFilter';


export function isBooleanFilter(value: unknown): value is BooleanFilter {
	return isObject(value)
		&& hasOwnProperty(value,'boolean')
		&& isObject(value.boolean)
		//&& hasOwnProperty(value.boolean, 'must')
		&& FILTER_CLAUSES.every((clause) => { // TODO Does array every work in Narhorn?
			const obj = value.boolean as object;
			if (hasOwnProperty(obj, clause)) {
				const oneOrMoreFilter = obj[clause];
				if (Array.isArray(oneOrMoreFilter)) {
					for (let i = 0; i < oneOrMoreFilter.length; i++) {
						const item = oneOrMoreFilter[i];
						if (!isFilter(item)) {
							return false;
						}
					}
				} else if (!isFilter(oneOrMoreFilter)) {
					return false;
				}
			}
			return true;
		});
}


export function isFilter(value: unknown): value is Filter {
	return isBooleanFilter(value)
		|| isExistsFilter(value)
		|| isNotExistsFilter(value)
		|| isHasValueFilter(value)
		|| isIdsFilter(value);
}

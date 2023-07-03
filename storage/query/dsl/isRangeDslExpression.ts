import type { RangeDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


// TODO Perhaps check that is doesn't have extra properties?
export default function isRangeDslExpression(value: unknown): value is RangeDslExpression {
	return isObject(value)
		&& hasOwnProperty(value,'field') // required
		&& isString(value.field)
		&& ['lt', 'lte', 'gt', 'gte'].some((key) => hasOwnProperty(value,key)) // at least one
		&& (
			hasOwnProperty(value, 'boost')
				? isNumber(value.boost)
				: true // boost is optional
		)
}

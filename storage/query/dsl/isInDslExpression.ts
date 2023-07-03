import type { InDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';
import isDslQueryType from './isDslQueryType';


// TODO Perhaps check that is doesn't have extra properties?
export default function isInDslExpression(value: unknown): value is InDslExpression {
	return isObject(value)
		&& hasOwnProperty(value,'field') // required
		&& hasOwnProperty(value,'values') // required
		&& isString(value.field)
		&& Array.isArray(value.values)
		&& (
			hasOwnProperty(value,'type')
				? isDslQueryType(value.type)
				: true // type is optional
		)
		&& (
			hasOwnProperty(value,'boost')
				? isNumber(value.boost)
				: true // boost is optional
		)
}

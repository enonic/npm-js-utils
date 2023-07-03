import type { TermDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';
import isDslQueryType from './isDslQueryType';


export default function isTermDslExpression(value: unknown): value is TermDslExpression {
	return isObject(value)
		&& hasOwnProperty(value,'field') // required
		&& hasOwnProperty(value,'value') // required
		&& isString(value.field)
		&& (
			hasOwnProperty(value,'type') // optional
				? isDslQueryType(value.type)
				: true
		)
		&& (
			hasOwnProperty(value,'boost') // optional
				? isNumber(value.boost)
				: true
		)
}

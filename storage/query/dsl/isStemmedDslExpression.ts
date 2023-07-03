import type { StemmedDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';
import isDslOperator from './isDslOperator';


// TODO Perhaps check that is doesn't have extra properties?
export default function isStemmedDslExpression(value: unknown): value is StemmedDslExpression {
	return isObject(value)
		&& hasOwnProperty(value,'fields') // required
		&& hasOwnProperty(value,'language') // required
		&& hasOwnProperty(value,'query') // required
		&& Array.isArray(value.fields)
		&& value.fields.every(isString)
		&& isString(value.language)
		&& isString(value.query)
		&& (
			hasOwnProperty(value,'operator')
				? isDslOperator(value.operator)
				: true // operator is optional
		)
		&& (
			hasOwnProperty(value,'boost')
				? isNumber(value.boost)
				: true // boost is optional
		)
}

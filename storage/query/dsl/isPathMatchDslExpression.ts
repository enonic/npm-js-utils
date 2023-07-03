import type { PathMatchDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


// TODO Perhaps check that is doesn't have extra properties?
export default function isPathMatchDslExpression(value: unknown): value is PathMatchDslExpression {
	return isObject(value)
		&& hasOwnProperty(value,'field') // required
		&& hasOwnProperty(value,'path') // required
		&& isString(value.field)
		&& isString(value.path)
		&& (
			hasOwnProperty(value,'minimumMatch')
				? isNumber(value.minimumMatch)
				: true // minimumMatch is opitonal
		)
		&& (
			hasOwnProperty(value,'boost')
				? isNumber(value.boost)
				: true // boost is optional
		)
}

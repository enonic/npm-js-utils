import type { MatchAllDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';


// TODO Perhaps check that is doesn't have extra properties?
export default function isMatchAllDslExpression(value: unknown): value is MatchAllDslExpression {
	return isObject(value)
		&& (
			hasOwnProperty(value,'boost')
				? isNumber(value.boost)
				: true // boost is optional
		)
}

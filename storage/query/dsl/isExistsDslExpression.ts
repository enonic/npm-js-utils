import type { ExistsDslExpression } from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';


// TODO Pretty weak type guard, perhaps check that is doesn't have extra properties?
export default function isExistsDslExpression(value: unknown): value is ExistsDslExpression {
	return isObject(value)
		&& hasOwnProperty(value,'field') // required
		&& isString(value.field)
		&& (
			hasOwnProperty(value,'boost') // optional
				? isNumber(value.boost)
				: true
		)
}

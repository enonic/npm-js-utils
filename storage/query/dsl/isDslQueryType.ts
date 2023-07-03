import type {
	DslQueryType
} from '@enonic-types/core';


import {isString} from '../../../value/isString';


export const DSL_EXPRESSION_VALUE_TYPE_DATE_TIME = 'dateTime';
export const DSL_EXPRESSION_VALUE_TYPE_TIME = 'time';


export default function isDslQueryType(value: unknown): value is DslQueryType {
	return isString(value)
		&& (
			value === DSL_EXPRESSION_VALUE_TYPE_DATE_TIME
			|| value === DSL_EXPRESSION_VALUE_TYPE_TIME
		)
}

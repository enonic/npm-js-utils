import type { DslOperator } from '@enonic-types/core';


import { includes } from '../../../array/includes';
import { isString } from '../../../value/isString';
import { QUERY_OPERATORS } from '../constants';


export default function isDslOperator(value: unknown): value is DslOperator {
	return isString(value)
		&& includes(QUERY_OPERATORS as unknown as string[], value as string);
}

import type {DslOperator} from '/lib/xp/node';
import type {QueryExpressionNgram} from '../../../types/index.d';


import {
	QUERY_OPERATOR_OR,
	// QUERY_OPERATORS,
	Fields
} from '../constants';
import {fulltextOrNgram} from './fulltextOrNgram';


// type Operator = typeof QUERY_OPERATORS[number]; // enum


export function ngram(
	fields: Fields,
	query: string,
	operator: DslOperator = QUERY_OPERATOR_OR,
	boost?: number // = 1
): QueryExpressionNgram {
	return fulltextOrNgram('ngram', fields, query, operator, boost) as QueryExpressionNgram;
}

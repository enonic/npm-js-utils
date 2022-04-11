import type {QueryExpressionNgram} from '../../../types/index.d';


import {
	QUERY_OPERATOR_OR,
	QUERY_OPERATORS,
	Fields
} from '../constants';
import {fulltextOrNgram} from './fulltextOrNgram';


type Operator = typeof QUERY_OPERATORS[number]; // enum


export function ngram(
	fields :Fields,
	query :string,
	operator :Operator = QUERY_OPERATOR_OR
) :QueryExpressionNgram {
	return fulltextOrNgram('ngram', fields, query, operator) as QueryExpressionNgram;
}

import type {QueryExpressionFulltext} from './index.d';


import {
	QUERY_OPERATOR_OR,
	QUERY_OPERATORS,
	Fields
} from '../constants';
import {fulltextOrNgram} from './fulltextOrNgram';


type Operator = typeof QUERY_OPERATORS[number]; // enum


export function fulltext(
	fields :Fields,
	query :string,
	operator :Operator = QUERY_OPERATOR_OR
) :QueryExpressionFulltext {
	return fulltextOrNgram('fulltext', fields, query, operator) as QueryExpressionFulltext;
}

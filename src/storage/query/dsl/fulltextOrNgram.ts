import type {
	QueryExpressionFulltext,
	QueryExpressionNgram
} from './types.d';

import {buildFieldsArray} from '../buildFields';
import {
	QUERY_OPERATOR_OR,
	QUERY_OPERATORS,
	Fields
} from '../constants';


type Operator = typeof QUERY_OPERATORS[number]; // enum

type Fulltext = 'fulltext';
type Ngram = 'ngram';


export function fulltextOrNgram(
	fOrN :Fulltext|Ngram, //= 'fulltext'
	fields :Fields,
	query :string,
	operator :Operator = QUERY_OPERATOR_OR
) :QueryExpressionFulltext | QueryExpressionNgram  {
	const innerObj = {
		fields: buildFieldsArray(fields),
		query,
		operator: operator.toUpperCase()
	}
	if (fOrN === 'fulltext') {
		return {
			fulltext: innerObj
		} as QueryExpressionFulltext;
	} else if (fOrN === 'ngram') {
		return {
			ngram: innerObj
		} as QueryExpressionNgram;
	}
	throw new Error(`first parameter must be 'fulltext' or 'ngram'`);
}

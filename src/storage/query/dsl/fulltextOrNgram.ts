import type {
	DslOperator,
	FulltextDslExpression,
	NgramDslExpression,
} from '/lib/xp/node';
import type {
	QueryExpressionFulltext,
	QueryExpressionNgram
} from '../../../types/index.d';


import {buildFieldsArray} from '../buildFields';
import {
	QUERY_OPERATOR_OR,
	// QUERY_OPERATORS,
	Fields
} from '../constants';


// type Operator = typeof QUERY_OPERATORS[number]; // enum

type Fulltext = 'fulltext';
type Ngram = 'ngram';


export function fulltextOrNgram(
	fOrN: Fulltext|Ngram, //= 'fulltext'
	fields: Fields,
	query: string,
	operator: DslOperator = QUERY_OPERATOR_OR,
	boost?: number // = 1
): QueryExpressionFulltext | QueryExpressionNgram  {
	const innerObj: FulltextDslExpression | NgramDslExpression = {
		fields: buildFieldsArray(fields),
		query,
		operator: operator.toUpperCase() as DslOperator
	}
	if (boost) {
		innerObj.boost = boost;
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

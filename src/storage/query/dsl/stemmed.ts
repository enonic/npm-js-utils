import type {DslOperator} from '/lib/xp/node';
import type {QueryExpressionStemmed} from '../../../types/index.d';


import {
	STEMMING_LANGUAGE_CODE_ENGLISH,
	StemmingLanguageCodes
} from '../../indexing/stemming';
import {buildFieldsArray} from '../buildFields';
import {
	QUERY_OPERATOR_OR,
	// QUERY_OPERATORS,
	Fields
} from '../constants';


// type Operator = typeof QUERY_OPERATORS[number]; // enum


export function stemmed(
	fields: Fields,
	query: string,
	operator: DslOperator = QUERY_OPERATOR_OR,
	language: StemmingLanguageCodes = STEMMING_LANGUAGE_CODE_ENGLISH
): QueryExpressionStemmed {
	return {
		stemmed: {
			fields: buildFieldsArray(fields),
			query,
			operator: operator.toUpperCase() as DslOperator,
			language
		}
	};
}

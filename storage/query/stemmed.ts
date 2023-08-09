import type { StemmingLanguageCode } from '../../types/Stemming';


import { STEMMING_LANGUAGE_CODE_ENGLISH } from '../indexing/stemming';
import {buildFields} from './buildFields';
import {
	QUERY_OPERATOR_AND,
	QUERY_OPERATOR_OR,
	QUERY_OPERATORS,
	Fields
} from './constants';


type Operator = typeof QUERY_OPERATORS[number]; // enum


export function stemmed(
	fields: Fields,
	searchString :string,
	operator: Operator = QUERY_OPERATOR_OR,
	language: StemmingLanguageCode = STEMMING_LANGUAGE_CODE_ENGLISH
) :string {
	return `stemmed(${buildFields(fields)},'${searchString}','${
		operator.toUpperCase() === QUERY_OPERATOR_AND
			? QUERY_OPERATOR_AND
			: QUERY_OPERATOR_OR
	}','${language}')`;
}

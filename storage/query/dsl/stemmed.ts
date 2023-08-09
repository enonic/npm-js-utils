import type {
	StemmedDslExpression
} from '../../../types/node/query/Dsl';
import type {
	DslOperator,
	// StemmedDslExpression // TODO 7_11_1 is missing boost
} from '/lib/xp/node';
import type {
	CompoundExpressionBoolean,
	QueryExpressionStemmed,
} from '../../../types/index.d';
import type { StemmingLanguageCode } from '../../../types/Stemming';

import { STEMMING_LANGUAGE_CODE_ENGLISH } from '../../indexing/stemming';
import {includes as stringIncludes} from '../../../string/includes';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';
import {buildFieldsArray} from '../buildFields';
import {bool} from './bool';
import {fieldsContainBoost} from './fieldsContainBoost';
import {or} from './or';
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
	language: StemmingLanguageCode = STEMMING_LANGUAGE_CODE_ENGLISH,
	boost?: number // = 1
): QueryExpressionStemmed | CompoundExpressionBoolean {
	if (fieldsContainBoost(fields)) {
		if (Array.isArray(fields)) {
			return bool(or(fields.map((field) => stemmed(
				field,
				query,
				operator,
				language,
				boost
			))));
		} else if (isObject(fields)) {
			const {boost: fieldBoost, field} = fields;
			if (fieldBoost && fieldBoost !== 1) {
				if (boost && boost !== 1) {
					boost = boost * fieldBoost;
				} else {
					boost = fieldBoost;
				}
			}
			return stemmed(
				field,
				query,
				operator,
				language,
				boost
			);
		} else if (isString(fields)) {
			if (stringIncludes(fields, ',')) {
				return stemmed(
					fields.split(','),
					query,
					operator,
					language,
					boost
				);
			} else if (stringIncludes(fields, '^')) {
				const caretIndex = fields.indexOf('^');
				const field = fields.substring(0,caretIndex);
				const fieldBoost = parseFloat(fields.substring(caretIndex + 1));
				if (fieldBoost && fieldBoost !== 1) {// (parseFloat('1.0') === 1) === true
					if (boost && boost !== 1) {
						boost = boost * fieldBoost;
					} else {
						boost = fieldBoost;
					}
				}
				return stemmed(
					field,
					query,
					operator,
					language,
					boost
				);
			}
		} else {
			throw new Error('stemmed: fields is not array, object or string!');
		}
	}
	const innerObj: StemmedDslExpression = {
		fields: buildFieldsArray(fields),
		query,
		operator: operator.toUpperCase() as DslOperator,
		language
	};
	if (boost) {
		innerObj.boost = boost;
	}
	return {
		stemmed: innerObj
	};
}

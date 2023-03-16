import type {
	FulltextDslExpression,
	NgramDslExpression,
} from '../../../types/node/query/Dsl';
import type {
	DslOperator,
	// FulltextDslExpression, // TODO 7_11_1 is missing boost
	// NgramDslExpression, // TODO 7_11_1 is missing boost
} from '/lib/xp/node';
import type {
	CompoundExpressionBoolean,
	QueryExpressionFulltext,
	QueryExpressionNgram
} from '../../../types/index.d';
import type {Fields} from '../constants';


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
): QueryExpressionFulltext | QueryExpressionNgram | CompoundExpressionBoolean {
	if (fieldsContainBoost(fields)) {
		if (Array.isArray(fields)) {
			return bool(or(fields.map((field) => fulltextOrNgram(
				fOrN,
				field,
				query,
				operator,
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
			return fulltextOrNgram(
				fOrN,
				field,
				query,
				operator,
				boost
			);
		} else if (isString(fields)) {
			if (stringIncludes(fields, ',')) {
				return fulltextOrNgram(
					fOrN,
					fields.split(','),
					query,
					operator,
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
				return fulltextOrNgram(
					fOrN,
					field,
					query,
					operator,
					boost
				);
			}
		} else {
			throw new Error(`${fOrN}: fields is not array, object or string!`);
		}
	}
	const innerObj: FulltextDslExpression | NgramDslExpression = {
		fields: buildFieldsArray(fields),
		query,
		operator: operator.toUpperCase() as DslOperator
	}
	if (boost && boost !== 1) {
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

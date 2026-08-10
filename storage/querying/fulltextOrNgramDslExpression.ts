import type { DslOperator, FulltextDslExpression, NgramDslExpression } from '@enonic-types/core';
import type { FieldObject, Fields } from '../query/types';

import { noNilsArray } from '../../array/noNilsArray';
import { isObject } from '../../value/isObject';
import { isSet } from '../../value/isSet';
import { isString } from '../../value/isString';
import { toStr } from '../../value/toStr';
import { QUERY_OPERATOR_AND } from '../query/constants';
import { hasCaret } from './hasCaret';


// Boosting
//
// A boost is a positive multiplier applied to the score contribution of a clause, compared to the
// default of 1.
//
// * a value greater than 1 makes the clause contribute more,
// * a value between 0 and 1 makes it contribute less (but still a positive amount).
//
// A boost between 0 and 1 is not a negative boost. "Less" here means less than at boost 1 — the
// contribution stays positive, so a match still adds to the score and always ranks a matching
// document at or above one that does not match. It never penalizes documents that match.
// There are 4 different boosts in Enonic:
//
// query: {
//   boolean: {
//   boost: 1.1 # Group boost. Decimals supported.
//   should: [{
//     fulltext: {
//     fields: ["_alltext^1"] # Field boost. Decimals NOT supported yet, but soon :)
//     query: "word^1.1" # Term boost. Decimals supported.
//     boost: 1.1 # Expression boost. Decimals supported.
//
// ref:
// https://developer.enonic.com/docs/code/stable/storage/querying#boosting
// https://www.elastic.co/guide/en/elasticsearch/reference/2.4/query-dsl-query-string-query.html#_boosting

function validateStr(fieldStr: string) {
	if (!hasCaret(fieldStr)) return fieldStr;
	const caretIndex = fieldStr.indexOf('^');
	const caretBoost = parseFloat(fieldStr.substring(caretIndex + 1));
	if (caretBoost < 0) {
		throw new Error('fulltextOrNgramDslExpression: Negative caret boost is invalid!');
	}
	return fieldStr;
}


function handleObject(fieldObj: FieldObject) {
	const { field: fieldAndMaybeCaret, boost: fieldBoost } = fieldObj;
	if (isSet(fieldBoost)) {
		if (hasCaret(fieldAndMaybeCaret)) {
			throw new Error(`Field has both caret and boost! ${toStr(fieldObj)}`);
		}
		if (fieldBoost < 0) {
			throw new Error('fulltextOrNgramDslExpression: Negative boost is invalid!');
		}
		// At this point Field only has fieldboost.
		return `${fieldAndMaybeCaret}^${fieldBoost}`;
	}

	return fieldAndMaybeCaret;
}


function mapFields(fields: Fields) {
	const fieldsArr = noNilsArray(fields);
	if (!fieldsArr.length) throw new Error('fulltextOrNgramDslExpression: No fields!');

	return fieldsArr.map((aField) => {
		if (isObject(aField)) return handleObject(aField);
		if (isString(aField)) return validateStr(aField);
		throw new Error(`fulltextOrNgramDslExpression: field isneither an object nor a string!`);
	});
}


function getFields(fields: Fields) {
	if (Array.isArray(fields)) return mapFields(fields);
	if (isObject(fields)) return [handleObject(fields)];
	if (isString(fields)) return [validateStr(fields)];
	throw new Error(`fulltextOrNgramDslExpression: fields is neither an object nor a string or an array of those!`);
}


export function fulltextOrNgramDslExpression(
	fields: Fields,
	query: string,
	operator?: DslOperator,
	expressionBoost?: number
): FulltextDslExpression | NgramDslExpression {
	const dslExpression: FulltextDslExpression | NgramDslExpression = {
		fields: getFields(fields),
		query,
	};

	if (isSet(expressionBoost)) dslExpression.boost = expressionBoost;

	if (operator && operator.toLocaleUpperCase() === QUERY_OPERATOR_AND) {
		dslExpression.operator = QUERY_OPERATOR_AND;
	}

	return dslExpression;
}

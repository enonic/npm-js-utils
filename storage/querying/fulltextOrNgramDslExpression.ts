import type { DslOperator, FulltextDslExpression, NgramDslExpression } from '@enonic-types/core';
import type { Fields } from '../query/types';

import { noNilsArray } from '../../array/noNilsArray';
import { isObject } from '../../value/isObject';
import { isString } from '../../value/isString';
import { toStr } from '../../value/toStr';
import { QUERY_OPERATOR_AND } from '../query/constants';
import { hasCaret } from './hasCaret';

export function fulltextOrNgramDslExpression(
	fields: Fields,
	query: string,
	operator?: DslOperator,
	boost?: number
): FulltextDslExpression | NgramDslExpression {
	const outFields: string[] = [];
	const fieldsArr = noNilsArray(fields);
	if (!fieldsArr.length) throw new Error('fulltextOrNgramDslExpression: No fields!');
	//let allSameBoost
	for (const aField of fieldsArr) {
		if (isObject(aField)) {
			const { field: fieldAndMaybeCaret, boost: fieldBoost } = aField;
			if (fieldBoost && hasCaret(fieldAndMaybeCaret)) {
				throw new Error(`Field has both caret and boost! ${toStr(aField)}`);
			}

			let caretBoost = 0;
			let fieldNameWithoutCaret = fieldAndMaybeCaret;
			if (hasCaret(fieldAndMaybeCaret)) {
				const caretIndex = fieldAndMaybeCaret.indexOf('^');
				fieldNameWithoutCaret = fieldAndMaybeCaret.substring(0, caretIndex);
				caretBoost = parseFloat(fieldAndMaybeCaret.substring(caretIndex + 1));
			}

			if (boost) {
				if (fieldBoost) {
					const multipliedBoost = fieldBoost * boost;
					outFields.push(`${fieldNameWithoutCaret}^${multipliedBoost}`);
				} else if (caretBoost) {
					const multipliedBoost = caretBoost * boost;
					outFields.push(`${fieldNameWithoutCaret}^${multipliedBoost}`);
				} else {
					outFields.push(`${fieldNameWithoutCaret}^${boost}`);
				}
			} else { // boost is Falsy
				if (fieldBoost) {
					outFields.push(`${fieldNameWithoutCaret}^${fieldBoost}`);
				} else {
					outFields.push(fieldAndMaybeCaret);
				}
			}
		} else if (isString(aField)) {
			if (boost) {
				outFields.push(`${aField}^${boost}`);
			} else {
				outFields.push(aField);
			}
		} else {
			throw new Error('fulltextOrNgramDslExpression: field not object nor string!');
		}
	} // for fieldsArr
	const dslExpression: FulltextDslExpression | NgramDslExpression = {
		fields: outFields,
		query,
	};
	if (operator && operator.toLocaleUpperCase() === QUERY_OPERATOR_AND) dslExpression.operator = QUERY_OPERATOR_AND;

	// Nono, always included in fields via caret
	// if (isNotNil(boost)) dslExpression.boost = boost;
	return dslExpression;
}

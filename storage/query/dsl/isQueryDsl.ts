import type {
	BooleanDslExpression,
	QueryDsl
} from '@enonic-types/core';


import {hasOwnProperty} from '../../../object/hasOwnProperty';
import {forceArray} from '../../../array/forceArray';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import isInDslExpression from './isInDslExpression';
import isExistsDslExpression from './isExistsDslExpression';
import isFulltextDslExpression from './isFulltextDslExpression';
import isLikeDslExpression from './isLikeDslExpression';
import isMatchAllDslExpression from './isMatchAllDslExpression';
import isNgramDslExpression from './isNgramDslExpression';
import isPathMatchDslExpression from './isPathMatchDslExpression';
import isRangeDslExpression from './isRangeDslExpression';
import isStemmedDslExpression from './isStemmedDslExpression';
import isTermDslExpression from './isTermDslExpression';


const COMPOUND_PROPERTIES = [
	'must',
	'mustNot',
	'should',
	'filter'
];


export function isBooleanDslExpression(value: unknown): value is BooleanDslExpression {
	return isObject(value)
 		&& COMPOUND_PROPERTIES.every((prop) =>
			hasOwnProperty(value, prop)
				? forceArray(value[prop])
					.every((item) => isQueryDsl(item))
				: true // prop is optional
		)
		&& (
			hasOwnProperty(value,'boost')
				? isNumber(value.boost)
				: true // boost is optional
		)
} // isBooleanDslExpression


export default function isQueryDsl(value: unknown): value is QueryDsl {
	return isObject(value)
	&& (
		(
			hasOwnProperty(value,'boolean')
			&& isBooleanDslExpression(value.boolean)
		)
		|| (
			hasOwnProperty(value,'exists')
			&& isExistsDslExpression(value.exists)
		)
		|| (
			hasOwnProperty(value,'fulltext')
			&& isFulltextDslExpression(value.fulltext)
		)
		|| (
			hasOwnProperty(value,'in')
			&& isInDslExpression(value.in)
		)
		|| (
			hasOwnProperty(value,'like')
			&& isLikeDslExpression(value.like)
		)
		|| (
			hasOwnProperty(value,'matchAll')
			&& isMatchAllDslExpression(value.matchAll)
		)
		|| (
			hasOwnProperty(value,'ngram')
			&& isNgramDslExpression(value.ngram)
		)
		|| (
			hasOwnProperty(value,'pathMatch')
			&& isPathMatchDslExpression(value.pathMatch)
		)
		|| (
			hasOwnProperty(value,'range')
			&& isRangeDslExpression(value.range)
		)
		|| (
			hasOwnProperty(value,'stemmed')
			&& isStemmedDslExpression(value.stemmed)
		)
		|| (
			hasOwnProperty(value,'term')
			&& isTermDslExpression(value.term)
		)
	);
} // isQueryDsl

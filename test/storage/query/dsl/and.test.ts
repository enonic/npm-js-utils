import type {
	// BooleanDslExpression,
	QueryDsl
	// QueryDsl,
} from '/lib/xp/node';

import {deepStrictEqual} from 'assert';
import {
	QUERY_OPERATOR_AND,
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	storage
} from '@enonic/js-utils';

/*const and = storage.query.dsl.and;
const fulltext = storage.query.dsl.fulltext;
const ngram = storage.query.dsl.ngram;
const stemmed = storage.query.dsl.stemmed;*/
const {
	and,
	fulltext,
	must,
	ngram,
	stemmed
} = storage.query.dsl;

const SEARCH_STRING = 'searchString';

const f = fulltext('_allText^3',SEARCH_STRING,QUERY_OPERATOR_AND);
const s = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND);
const sNo = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND,STEMMING_LANGUAGE_CODE_NORWEGIAN);
const sEs = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND,STEMMING_LANGUAGE_CODE_SPANISH);
const n = ngram('_allText',SEARCH_STRING,QUERY_OPERATOR_AND);

const resF = {
	fulltext: {
		boost: 3,
		fields: ['_allText'],
		operator: 'AND',
		query: SEARCH_STRING
	}
} satisfies QueryDsl;

const resS: QueryDsl = {
	stemmed: {
		boost: 2,
		fields: ['_allText'],
		language: 'en',
		operator: 'AND',
		query: SEARCH_STRING,
	}
} satisfies QueryDsl;

describe('and', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				must: [resF]
			},
			and(f)
		)
	});
	it('two params', () => {
		deepStrictEqual(
			{
				must: [resF, resS]
			},
			must(f,s)
		)
	});
	it('array with one item', () => {
		deepStrictEqual(
			{
				must: [resF]
			},
			and([f])
		)
	});
	it('array with two items', () => {
		deepStrictEqual(
			{
				must: [resF, resS]
			},
			must([f,s])
		)
	});
	it('combo', () => {
		deepStrictEqual(
			{
				must: [
					resF,
					resS,
					{
						stemmed: {
							boost: 2,
							fields: ['_allText'],
							language: 'no',
							operator: 'AND',
							query: SEARCH_STRING,
						}
					}, {
						stemmed: {
							boost: 2,
							fields: ['_allText'],
							language: 'es',
							operator: 'AND',
							query: SEARCH_STRING,
						}
					}, {
						ngram: {
							fields: ['_allText'],
							operator: 'AND',
							query: SEARCH_STRING
						}
					}
				]
			},
			and(f,[s],[sNo,sEs],n)
		)
	});
});

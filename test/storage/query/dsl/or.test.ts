import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {
	QUERY_OPERATOR_AND,
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
} from '../../../../index';
import {
	or,
	fulltext,
	ngram,
	should,
	stemmed
} from '../../../../storage/query/dsl/index';


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
};

const resS = {
	stemmed: {
		boost: 2,
		fields: ['_allText'],
		language: 'en',
		operator: 'AND',
		query: SEARCH_STRING,
	}
};

describe('or', () => {
	test('minimal', () => {
		deepStrictEqual(
			{
				should: [resF]
			},
			or(f)
		)
	});
	test('two params', () => {
		deepStrictEqual(
			{
				should: [resF, resS]
			},
			should(f,s)
		)
	});
	test('array with one item', () => {
		deepStrictEqual(
			{
				should: [resF]
			},
			or([f])
		)
	});
	test('array with two items', () => {
		deepStrictEqual(
			{
				should: [resF, resS]
			},
			should([f,s])
		)
	});
	test('combo', () => {
		deepStrictEqual(
			{
				should: [
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
			or(f,[s],[sNo,sEs],n)
		)
	});
});

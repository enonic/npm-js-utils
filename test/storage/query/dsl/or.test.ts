import {deepStrictEqual} from 'assert';
import {
	QUERY_OPERATOR_AND,
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	storage
} from '../../../../src';

const or = storage.query.dsl.or;
const fulltext = storage.query.dsl.fulltext;
const ngram = storage.query.dsl.ngram;
const stemmed = storage.query.dsl.stemmed;

const SEARCH_STRING = 'searchString';

const f = fulltext('_allText^3',SEARCH_STRING,QUERY_OPERATOR_AND);
const s = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND);
const sNo = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND,STEMMING_LANGUAGE_CODE_NORWEGIAN);
const sEs = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND,STEMMING_LANGUAGE_CODE_SPANISH);
const n = ngram('_allText',SEARCH_STRING,QUERY_OPERATOR_AND);

const resF = {
	fulltext: {
		fields: ['_allText^3'],
		operator: 'AND',
		query: SEARCH_STRING
	}
};

const resS = {
	stemmed: {
		fields: ['_allText^2'],
		language: 'en',
		operator: 'AND',
		query: SEARCH_STRING,
	}
};

describe('or', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				should: [resF]
			},
			or(f)
		)
	});
	it('two params', () => {
		deepStrictEqual(
			{
				should: [resF, resS]
			},
			or(f,s)
		)
	});
	it('array with one item', () => {
		deepStrictEqual(
			{
				should: [resF]
			},
			or([f])
		)
	});
	it('array with two items', () => {
		deepStrictEqual(
			{
				should: [resF, resS]
			},
			or([f,s])
		)
	});
	it('combo', () => {
		deepStrictEqual(
			{
				should: [
					resF,
					resS,
					{
						stemmed: {
							fields: ['_allText^2'],
							language: 'no',
							operator: 'AND',
							query: SEARCH_STRING,
						}
					}, {
						stemmed: {
							fields: ['_allText^2'],
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

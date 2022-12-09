import {deepStrictEqual} from 'assert';
import {
	QUERY_OPERATOR_AND,
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	storage
} from '../../../../src';

/*const not = storage.query.dsl.not;
const fulltext = storage.query.dsl.fulltext;
const ngram = storage.query.dsl.ngram;
const stemmed = storage.query.dsl.stemmed;*/
const {
	fulltext,
	ngram,
	mustNot,
	not,
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

describe('not', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				mustNot: [resF]
			},
			not(f)
		)
	});
	it('two params', () => {
		deepStrictEqual(
			{
				mustNot: [resF, resS]
			},
			mustNot(f,s)
		)
	});
	it('array with one item', () => {
		deepStrictEqual(
			{
				mustNot: [resF]
			},
			not([f])
		)
	});
	it('array with two items', () => {
		deepStrictEqual(
			{
				mustNot: [resF, resS]
			},
			mustNot([f,s])
		)
	});
	it('combo', () => {
		deepStrictEqual(
			{
				mustNot: [
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
			not(f,[s],[sNo,sEs],n)
		)
	});
});

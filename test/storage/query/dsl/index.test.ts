import {deepStrictEqual} from 'assert';
import {
	QUERY_OPERATOR_AND,
	//STEMMING_LANGUAGE_CODE_NORWEGIAN,
	//STEMMING_LANGUAGE_CODE_SPANISH,
} from '../../../../storage/query/constants';
import {
	and,
	bool,
	fulltext,
	ngram,
	not,
	or,
	stemmed
} from '../../../../storage/query/dsl/index';


const SEARCH_STRING = 'searchString';

const f = fulltext('_allText^3',SEARCH_STRING,QUERY_OPERATOR_AND);
const s = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND);
//const sNo = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND,STEMMING_LANGUAGE_CODE_NORWEGIAN);
//const sEs = stemmed('_allText^2',SEARCH_STRING,QUERY_OPERATOR_AND,STEMMING_LANGUAGE_CODE_SPANISH);
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

/*const resSNo = {
	stemmed: {
		fields: ['_allText^2'],
		language: 'no',
		operator: 'AND',
		query: SEARCH_STRING,
	}
};

const resSEs = {
	stemmed: {
		fields: ['_allText^2'],
		language: 'es',
		operator: 'AND',
		query: SEARCH_STRING,
	}
};*/

const resN = {
	ngram: {
		fields: ['_allText'],
		operator: 'AND',
		query: SEARCH_STRING
	}
};


describe('dsl', () => {
	it('nested', () => {
		deepStrictEqual(
			{
				must: [
					resF,
					{
						boolean: {
							mustNot: [
								resS,
								{
									boolean: {
										should: [resN]
									}
								}
							]
						}
					}
				],
			},
			and(
				f,
				bool(not(
					s,
					bool(or(n))
				))
			)
		)
	}); // it
}); // describe dsl

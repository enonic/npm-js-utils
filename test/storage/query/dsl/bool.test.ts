import {deepStrictEqual} from 'assert';
import {
	QUERY_OPERATOR_AND,
	//STEMMING_LANGUAGE_CODE_NORWEGIAN,
	//STEMMING_LANGUAGE_CODE_SPANISH,
	storage
} from '../../../../src';

const and = storage.query.dsl.and;
const bool = storage.query.dsl.bool;
const fulltext = storage.query.dsl.fulltext;
const ngram = storage.query.dsl.ngram;
const stemmed = storage.query.dsl.stemmed;


const SEARCH_STRING = 'searchString';

const f = fulltext('_allText^3',SEARCH_STRING,QUERY_OPERATOR_AND);

const resF = {
	fulltext: {
		boost: 3,
		fields: ['_allText'],
		operator: 'AND',
		query: SEARCH_STRING
	}
};

describe('bool', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				boolean: {
					must: [resF]
				}
			},
			bool(and(f))
		)
	});
	it('normal', () => {
		const fields = 'url^1.2,title^1.1,text';
		const searchString = 'fun video';
		const operator = 'OR';
		const query = bool(and(
			fulltext(fields, searchString, operator),
			stemmed(fields, searchString, operator, 'no', 0.9),
			stemmed(fields, searchString, operator, 'en', 0.8),
			ngram(fields, searchString, operator, 0.7)
		));
		// console.debug(JSON.stringify(query, null, 4));
		const expected = {
			"boolean": {
				"must": [
					{
						"boolean": {
							"should": [
								{
									"fulltext": {
										"fields": [
											"url"
										],
										"query": "fun video",
										"operator": "OR",
										"boost": 1.2
									}
								},
								{
									"fulltext": {
										"fields": [
											"title"
										],
										"query": "fun video",
										"operator": "OR",
										"boost": 1.1
									}
								},
								{
									"fulltext": {
										"fields": [
											"text"
										],
										"query": "fun video",
										"operator": "OR"
									}
								}
							]
						}
					},
					{
						"boolean": {
							"should": [
								{
									"stemmed": {
										"fields": [
											"url"
										],
										"query": "fun video",
										"operator": "OR",
										"language": "no",
										"boost": 1.08
									}
								},
								{
									"stemmed": {
										"fields": [
											"title"
										],
										"query": "fun video",
										"operator": "OR",
										"language": "no",
										"boost": 0.9900000000000001
									}
								},
								{
									"stemmed": {
										"fields": [
											"text"
										],
										"query": "fun video",
										"operator": "OR",
										"language": "no",
										"boost": 0.9
									}
								}
							]
						}
					},
					{
						"boolean": {
							"should": [
								{
									"stemmed": {
										"fields": [
											"url"
										],
										"query": "fun video",
										"operator": "OR",
										"language": "en",
										"boost": 0.96
									}
								},
								{
									"stemmed": {
										"fields": [
											"title"
										],
										"query": "fun video",
										"operator": "OR",
										"language": "en",
										"boost": 0.8800000000000001
									}
								},
								{
									"stemmed": {
										"fields": [
											"text"
										],
										"query": "fun video",
										"operator": "OR",
										"language": "en",
										"boost": 0.8
									}
								}
							]
						}
					},
					{
						"boolean": {
							"should": [
								{
									"ngram": {
										"fields": [
											"url"
										],
										"query": "fun video",
										"operator": "OR",
										"boost": 0.84
									}
								},
								{
									"ngram": {
										"fields": [
											"title"
										],
										"query": "fun video",
										"operator": "OR",
										"boost": 0.77
									}
								},
								{
									"ngram": {
										"fields": [
											"text"
										],
										"query": "fun video",
										"operator": "OR",
										"boost": 0.7
									}
								}
							]
						}
					}
				]
			}
		};
		deepStrictEqual(expected,query);
	});
}); // describe bool

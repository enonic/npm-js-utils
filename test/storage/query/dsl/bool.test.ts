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


const SEARCH_STRING = 'searchString';

const f = fulltext('_allText^3',SEARCH_STRING,QUERY_OPERATOR_AND);

const resF = {
	fulltext: {
		fields: ['_allText^3'],
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
}); // describe bool

import {deepStrictEqual} from 'assert';
import {
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	storage
} from '@enonic/js-utils';

const stemmed = storage.query.dsl.stemmed;


describe('stemmed', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				stemmed: {
					fields: ['_allText'],
					language: 'en',
					operator: 'OR',
					query: 'searchString'
				}
			},
			stemmed(
				'_allText',
				'searchString'
			)
		)
	});
	it('two fields', () => {
		deepStrictEqual(
			{
				boolean: {
					should: [{
						stemmed: {
							boost: 2,
							fields: ['title'],
							language: 'no',
							operator: 'AND',
							query: 'searchString'
						}
					},{
						stemmed: {
							fields: ['text'],
							language: 'no',
							operator: 'AND',
							query: 'searchString'
						}
					}]
				}
			},
			stemmed(
				[
					'title^2',
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"aNd"' is not assignable to parameter of type 'DslOperator'.
				'aNd',
				STEMMING_LANGUAGE_CODE_NORWEGIAN
			)
		)
	});
	it('two fields with boost', () => {
		deepStrictEqual(
			{
				boolean: {
					should: [{
						stemmed: {
							boost: 2.2,
							fields: ['title'],
							language: 'es',
							operator: 'OR',
							query: 'searchString'
						}
					},{
						stemmed: {
							boost: 1.1,
							fields: ['text'],
							language: 'es',
							operator: 'OR',
							query: 'searchString'
						}
					}]
				}
			},
			stemmed(
				[
					{
						field: 'title',
						boost: 2
					},
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				STEMMING_LANGUAGE_CODE_SPANISH,
				1.1
			)
		)
	});
	it('zero boost', () => {
		deepStrictEqual(
			{
				stemmed: {
					fields: ['title','text'],
					language: 'es',
					operator: 'OR',
					query: 'searchString'
				}
			},
			stemmed(
				[
					{
						field: 'title',
						boost: 0
					},
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				STEMMING_LANGUAGE_CODE_SPANISH,
				0
			)
		)
	});
});

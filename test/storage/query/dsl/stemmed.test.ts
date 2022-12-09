import {deepStrictEqual} from 'assert';
import {
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	storage
} from '../../../../src';

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
				stemmed: {
					fields: ['title^2','text'],
					language: 'no',
					operator: 'AND',
					query: 'searchString'
				}
			},
			stemmed(
				[
					'title^2',
					'text'
				],
				'searchString',
				'aNd',
				STEMMING_LANGUAGE_CODE_NORWEGIAN
			)
		)
	});
	it('two fields with boost', () => {
		deepStrictEqual(
			{
				stemmed: {
					boost: 1.1,
					fields: ['title^2','text'],
					language: 'es',
					operator: 'OR',
					query: 'searchString'
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
				'oR',
				STEMMING_LANGUAGE_CODE_SPANISH,
				1.1
			)
		)
	});
});

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
				'oR',
				STEMMING_LANGUAGE_CODE_SPANISH,
				0
			)
		)
	});
});

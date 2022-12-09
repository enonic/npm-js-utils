import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

const ngram = storage.query.dsl.ngram;


describe('ngram', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				ngram: {
					fields: ['_allText'],
					query: 'searchString',
					operator: 'OR'
				}
			},
			ngram(
				'_allText',
				'searchString'
			)
		)
	});
	it('two fields', () => {
		deepStrictEqual(
			{
				ngram: {
					fields: ['title^2','text'],
					query: 'searchString',
					operator: 'AND'
				}
			},
			ngram(
				[
					'title^2',
					'text'
				],
				'searchString',
				'aNd'
			)
		)
	});
	it('two fields with boost', () => {
		deepStrictEqual(
			{
				ngram: {
					boost: 1.1,
					fields: ['title^2','text'],
					query: 'searchString',
					operator: 'OR'
				}
			},
			ngram(
				[
					{
						field: 'title',
						boost: 2
					},
					'text'
				],
				'searchString',
				'oR',
				1.1
			)
		)
	});
	it('zero boost', () => {
		deepStrictEqual(
			{
				ngram: {
					fields: ['title','text'],
					query: 'searchString',
					operator: 'OR'
				}
			},
			ngram(
				[
					{
						field: 'title',
						boost: 0
					},
					'text'
				],
				'searchString',
				'oR',
				0
			)
		)
	});
});

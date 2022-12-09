import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

const fulltext = storage.query.dsl.fulltext;


describe('fulltext', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				fulltext: {
					fields: ['_allText'],
					query: 'searchString',
					operator: 'OR'
				}
			},
			fulltext(
				'_allText',
				'searchString'
			)
		)
	});
	it('two fields', () => {
		deepStrictEqual(
			{
				fulltext: {
					fields: ['title^2','text'],
					query: 'searchString',
					operator: 'AND'
				}
			},
			fulltext(
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
				fulltext: {
					boost: 1.1,
					fields: ['title^2','text'],
					query: 'searchString',
					operator: 'OR'
				}
			},
			fulltext(
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
				fulltext: {
					fields: ['title','text'],
					query: 'searchString',
					operator: 'OR'
				}
			},
			fulltext(
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

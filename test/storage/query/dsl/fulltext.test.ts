import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { fulltext } from '../../../../storage/query/dsl/index';


describe('fulltext', () => {
	test('minimal', () => {
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
	test('two fields', () => {
		deepStrictEqual(
			{
				boolean: {
					should: [{
						fulltext: {
							boost: 2,
							fields: ['title'],
							query: 'searchString',
							operator: 'AND'
						}
					},{
						fulltext: {
							fields: ['text'],
							query: 'searchString',
							operator: 'AND'
						}
					}]
				}
			},
			fulltext(
				[
					'title^2',
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"aNd"' is not assignable to parameter of type 'DslOperator'.
				'aNd'
			)
		)
	});
	test('two fields with boost', () => {
		deepStrictEqual(
			{
				boolean: {
					should: [{
						fulltext: {
							boost: 2.2,
							fields: ['title'],
							query: 'searchString',
							operator: 'OR'
						}
					},{
						fulltext: {
							boost: 1.1,
							fields: ['text'],
							query: 'searchString',
							operator: 'OR'
						}
					}]
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
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				1.1
			)
		)
	});
	test('flat boost', () => {
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
						boost: 1
					},
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				1
			)
		)
	});
	test('zero boost', () => {
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
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				0
			)
		)
	});
});

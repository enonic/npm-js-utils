import {deepStrictEqual} from 'assert';
import {
	describe,
	expect,
	test
} from '@jest/globals';
import { fulltext } from '../../../storage/querying';


describe('storage/querying/fulltext', () => {
	test('minimal', () => {
		deepStrictEqual(
			fulltext(
				'_allText',
				'searchString'
			),
			{
				fulltext: {
					fields: ['_allText'],
					query: 'searchString',
				}
			},

		)
	});

	test('two fields', () => {
		deepStrictEqual(
			fulltext(
				[
					'title^2',
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"aNd"' is not assignable to parameter of type 'DslOperator'.
				'aNd'
			),
			{
				fulltext: {
					fields: ['title^2','text'],
					query: 'searchString',
					operator: 'AND'
				}
			},
		)
	});

	test('two fields with boost', () => {
		deepStrictEqual(
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
			),
			{
				fulltext: {
					fields: [
						'title^2.2',
						'text^1.1'
					],
					query: 'searchString',
				}
			},
		)
	});

	test('zero boost', () => {
		deepStrictEqual(
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
				'Or',
				0
			),
			{
				fulltext: {
					fields: ['title','text'],
					query: 'searchString',
				}
			},
		)
	});

	test('field object with caret, but not boost', () => {
		deepStrictEqual(
			fulltext(
				[
					{
						field: 'title^1',
					},
				],
				'searchString',
				'OR',
				1
			),
			{
				fulltext: {
					fields: ['title^1'],
					query: 'searchString',
				}
			},
		)
	});

	test('field object without boost', () => {
		deepStrictEqual(
			fulltext(
				[
					{
						field: 'title',
					},
				],
				'searchString',
				'OR',
				1
			),
			{
				fulltext: {
					fields: ['title^1'],
					query: 'searchString',
				}
			},
		)
	});

	test('No expression boost, but field objects with boost', () => {
		deepStrictEqual(
			fulltext(
				[
					{
						field: 'title',
						boost: 2,
					},
					{
						field: 'text^1',
					},
				],
				'searchString',
			),
			{
				fulltext: {
					fields: ['title^2', 'text^1'],
					query: 'searchString',
				}
			},
		)
	});

	test('throws no fields', () => {
		expect(() => fulltext([],'query')).toThrow();
	});

	test('throws when both caret and field boost', () => {
		expect(() => fulltext([{
			field: 'name^1',
			boost: 1,
		}],'query')).toThrow();
	});

	test('throws when field is not object nor string', () => {
		// @ts-expect-error Testing invalid input
		expect(() => fulltext([42],'query')).toThrow();
	});
});

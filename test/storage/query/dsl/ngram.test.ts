import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { ngram } from '../../../../storage/query/dsl/index';


describe('ngram', () => {
	test('minimal', () => {
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
	test('two fields', () => {
		deepStrictEqual(
			{
				boolean: {
					should:[{
						ngram: {
							boost: 2,
							fields: ['title'],
							query: 'searchString',
							operator: 'AND'
						}
					}, {
						ngram: {
							fields: ['text'],
							query: 'searchString',
							operator: 'AND'
						}
					}]
				}
			},
			ngram(
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
					should:[{
						ngram: {
							boost: 2.2,
							fields: ['title'],
							query: 'searchString',
							operator: 'OR'
						}
					},{
						ngram: {
							boost: 1.1,
							fields: ['text'],
							query: 'searchString',
							operator: 'OR'
						}
					}]
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
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				1.1
			)
		)
	});
	test('zero boost', () => {
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
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				0
			)
		)
	});
});

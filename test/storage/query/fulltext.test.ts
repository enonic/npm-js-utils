import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { fulltext } from '../../../index';


describe('fulltext', () => {
	test('minimal', () => {
		deepStrictEqual(
			"fulltext('_allText','searchString')",
			fulltext(
				'_allText',
				'searchString'
			)
		)
	});
	test('two fields', () => {
		deepStrictEqual(
			"fulltext('title^2,text','searchString','AND')",
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
			"fulltext('title^2,text','searchString')",
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
				'oR'
			)
		)
	});
});

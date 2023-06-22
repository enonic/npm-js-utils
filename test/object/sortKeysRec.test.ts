import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { sortKeysRec } from '../../index';

const {keys} = Object;

const a = '1';
const b = '2';

describe('sortKeysRec', () => {
	describe('object', () => {
		test('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b
				},
				sortKeysRec({b,a})
			);
		});
		test('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(sortKeysRec({b,a}))
			);
		});
	});

	describe('nested object', () => {
		const res = sortKeysRec({
			c: {
				b,
				a
			},
			b,
			a
		});
		test('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b,
					c: {
						a,
						b
					}
				},
				res
			);
		});
		test('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b', 'c'],
				keys(res)
			);
		});
		test('nested keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(res.c)
			);
		});
	});

	describe('nested object inside an array', () => {
		const res = sortKeysRec([{
			c: {
				b,
				a
			},
			b,
			a
		}]);
		test('array is deepStrictEqual', () => {
			deepStrictEqual(
				[{
					a,
					b,
					c: {
						a,
						b
					}
				}],
				res
			);
		});
		test('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b', 'c'],
				keys(res[0])
			);
		});
		test('nested keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(res[0].c)
			);
		});
	});
	describe('leaves non objects alone', () => {
		test('boolean false', () => {
			deepStrictEqual(
				false,
				sortKeysRec(false)
			);
		});
		test('boolean true', () => {
			deepStrictEqual(
				true,
				sortKeysRec(true)
			);
		});
		test('null', () => {
			deepStrictEqual(
				null,
				sortKeysRec(null)
			);
		});
	});
});

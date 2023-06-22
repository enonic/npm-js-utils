import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { sortKeys } from '../../index';


const {keys} = Object;

const a = '1';
const b = '2';


describe('sortKeys', () => {
	describe('object', () => {
		const res = sortKeys({
			b,
			a
		});
		test('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b
				},
				res
			);
		});
		test('object keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(res)
			);
		});
	});
	describe('nested object', () => {
		const res = sortKeys({
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
		test('nested keys are NOT sorted', () => {
			deepStrictEqual(
				['b', 'a'],
				keys(res.c)
			);
		});
	});
});

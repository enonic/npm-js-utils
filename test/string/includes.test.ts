import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { stringIncludes as includes } from '../../index';

describe('string', () => {
	describe('includes', () => {
		test("'', 'a' --> false", () => {
			deepStrictEqual(
				false,
				includes('', 'a')
			)
		});
		test("'abc', 'a' --> true", () => {
			deepStrictEqual(
				true,
				includes('abc', 'a')
			)
		});
		test("'abc', 'b' --> true", () => {
			deepStrictEqual(
				true,
				includes('abc', 'b')
			)
		});
		test("'abc', 'c' --> true", () => {
			deepStrictEqual(
				true,
				includes('abc', 'c')
			)
		});
		test("'abc', 'd' --> false", () => {
			deepStrictEqual(
				false,
				includes('abc', 'd')
			)
		});
	});
});

import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {arrayIncludes as includes} from '../../index';

describe('array', () => {
	describe('includes', () => {
		test("[], 'a' --> false", () => {
			deepStrictEqual(
				false,
				includes([], 'a')
			)
		});
		test("['a', 'b', 'c'], 'a' --> true", () => {
			deepStrictEqual(
				true,
				includes(['a', 'b', 'c'], 'a')
			)
		});
		test("['a', 'b', 'c'], 'b' --> true", () => {
			deepStrictEqual(
				true,
				includes(['a', 'b', 'c'], 'b')
			)
		});
		test("['a', 'b', 'c'], 'd' --> false", () => {
			deepStrictEqual(
				false,
				includes(['a', 'b', 'c'], 'd')
			)
		});
	});
});

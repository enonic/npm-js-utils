import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { or } from '../../../index';


describe('or', () => {
	test('minimal', () => {
		deepStrictEqual(
			"OR a",
			or('a')
		)
	});
	test('two params', () => {
		deepStrictEqual(
			"a OR b",
			or('a','b')
		)
	});
	test('array with one item', () => {
		deepStrictEqual(
			"OR a",
			or(['a'])
		)
	});
	test('array with two items', () => {
		deepStrictEqual(
			"a OR b",
			or(['a','b'])
		)
	});
	test('combo', () => {
		deepStrictEqual(
			"a OR b OR c OR d OR e",
			or('a',['b'],['c','d'],'e')
		)
	});
});

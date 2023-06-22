import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { and } from '../../../index';


describe('and', () => {
	test('minimal', () => {
		deepStrictEqual(
			"AND a",
			and('a')
		)
	});
	test('two params', () => {
		deepStrictEqual(
			"a AND b",
			and('a','b')
		)
	});
	test('array with one item', () => {
		deepStrictEqual(
			"AND a",
			and(['a'])
		)
	});
	test('array with two items', () => {
		deepStrictEqual(
			"a AND b",
			and(['a','b'])
		)
	});
	test('combo', () => {
		deepStrictEqual(
			"a AND b AND c AND d AND e",
			and('a',['b'],['c','d'],'e')
		)
	});
});

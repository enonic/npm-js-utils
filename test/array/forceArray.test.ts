import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {forceArray} from '../../index';

describe('forceArray', () => {
	test('Keeps arrays as is', () => {
		deepStrictEqual(
			['a'],
			forceArray(['a'])
		)
	});

	test('A number becomes array with that number', () => {
		deepStrictEqual(
			[1],
			forceArray(1)
		)
	});

	test('A string becomes array with that string', () => {
		deepStrictEqual(
			['a'],
			forceArray('a')
		)
	});

	test('An object becomes array with that object', () => {
		deepStrictEqual(
			[{a: 1}],
			forceArray({a: 1})
		)
	});
});

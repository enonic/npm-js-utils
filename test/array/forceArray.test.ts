import {deepStrictEqual} from 'assert';
import {forceArray} from '@enonic/js-utils';

describe('forceArray', () => {
	it('Keeps arrays as is', () => {
		deepStrictEqual(
			['a'],
			forceArray(['a'])
		)
	});

	it('A number becomes array with that number', () => {
		deepStrictEqual(
			[1],
			forceArray(1)
		)
	});

	it('A string becomes array with that string', () => {
		deepStrictEqual(
			['a'],
			forceArray('a')
		)
	});

	it('An object becomes array with that object', () => {
		deepStrictEqual(
			[{a: 1}],
			forceArray({a: 1})
		)
	});
});

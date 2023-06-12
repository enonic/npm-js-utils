import {deepStrictEqual} from 'assert';
import { or } from '../../../index';


describe('or', () => {
	it('minimal', () => {
		deepStrictEqual(
			"OR a",
			or('a')
		)
	});
	it('two params', () => {
		deepStrictEqual(
			"a OR b",
			or('a','b')
		)
	});
	it('array with one item', () => {
		deepStrictEqual(
			"OR a",
			or(['a'])
		)
	});
	it('array with two items', () => {
		deepStrictEqual(
			"a OR b",
			or(['a','b'])
		)
	});
	it('combo', () => {
		deepStrictEqual(
			"a OR b OR c OR d OR e",
			or('a',['b'],['c','d'],'e')
		)
	});
});

import {deepStrictEqual} from 'assert';
import { and } from '../../../index';


describe('and', () => {
	it('minimal', () => {
		deepStrictEqual(
			"AND a",
			and('a')
		)
	});
	it('two params', () => {
		deepStrictEqual(
			"a AND b",
			and('a','b')
		)
	});
	it('array with one item', () => {
		deepStrictEqual(
			"AND a",
			and(['a'])
		)
	});
	it('array with two items', () => {
		deepStrictEqual(
			"a AND b",
			and(['a','b'])
		)
	});
	it('combo', () => {
		deepStrictEqual(
			"a AND b AND c AND d AND e",
			and('a',['b'],['c','d'],'e')
		)
	});
});

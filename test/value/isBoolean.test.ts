import {deepStrictEqual} from 'assert';
import {isBoolean} from '../../src';


describe('isBoolean', () => {
	it('isBoolean(true) is true', () => {
		deepStrictEqual(true,isBoolean(true))
	});
	it('isBoolean(false) is true', () => {
		deepStrictEqual(true,isBoolean(false))
	});
	it('isBoolean({}) is false', () => {
		deepStrictEqual(false,isBoolean({}))
	});
	it('isBoolean([]) is false', () => {
		deepStrictEqual(false,isBoolean([]))
	});
});

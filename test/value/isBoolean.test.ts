import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isBoolean } from '../../index';


describe('isBoolean', () => {
	test('isBoolean(true) is true', () => {
		deepStrictEqual(true,isBoolean(true))
	});
	test('isBoolean(false) is true', () => {
		deepStrictEqual(true,isBoolean(false))
	});
	test('isBoolean({}) is false', () => {
		deepStrictEqual(false,isBoolean({}))
	});
	test('isBoolean([]) is false', () => {
		deepStrictEqual(false,isBoolean([]))
	});
});

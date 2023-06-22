import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { endsWith } from '../../index';


describe('string', () => {
	describe('endsWith', () => {
		test("endsWith('word', 'd') --> true'", () => {
			deepStrictEqual(true, endsWith('word', 'd'))
		});
		test("endsWith('word', 'rd') --> true'", () => {
			deepStrictEqual(true, endsWith('word', 'rd'))
		});
		test("endsWith('word', 'o') --> false'", () => {
			deepStrictEqual(false, endsWith('word', 'o'))
		});
	});
});

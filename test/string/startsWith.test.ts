import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { startsWith } from '../../index';


describe('string', () => {
	describe('startsWith', () => {
		test("startsWith('word', 'w') --> true'", () => {
			deepStrictEqual(true,startsWith('word', 'w'))
		});
		test("startsWith('word', 'wo') --> true'", () => {
			deepStrictEqual(true,startsWith('word', 'wo'))
		});
		test("startsWith('word', 'o') --> false'", () => {
			deepStrictEqual(false,startsWith('word', 'o'))
		});
		test("startsWith('word', 'o', 1) --> true'", () => {
			deepStrictEqual(true,startsWith('word', 'o', 1))
		});
	});
});

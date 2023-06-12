import {
	describe,
	expect,
	test
} from '@jest/globals';
import { rpad } from '../../index';


describe('string', () => {
	describe('rpad', () => {
		test('number 0 with whitespace', () => {
			expect(rpad(0)).toBe('0 ');
		});

		test('letter a with whitespace', () => {
			expect(rpad('a')).toBe('a ');
		});

		test('letter a with 9 Z', () => {
			expect(rpad('a', 10, 'Z')).toBe('aZZZZZZZZZ');
		});

		test('empty string -> string with length 2', () => {
			expect(rpad('')).toBe('  ');
		});

		test('undefined -> "undefined"', () => {
			expect(rpad(undefined)).toBe('undefined');
		});
	});
});

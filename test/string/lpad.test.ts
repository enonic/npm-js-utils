import {
	describe,
	expect,
	test
} from '@jest/globals';
import { lpad } from '../../index';


describe('string', () => {
	describe('rpad', () => {
		test('number 0 with whitespace', () => {
			expect(lpad(0)).toBe(' 0');
		});
		test('number 1 with 9 zeros', () => {
			expect(lpad(1, 10, '0')).toBe('0000000001');
		});

		test('letter a with whitespace', () => {
			expect(lpad('a')).toBe(' a');
		});

		test('letter a with 9 Z letters', () => {
			expect(lpad('a', 10, 'Z')).toBe('ZZZZZZZZZa');
		});

		test('empty string -> string with length 2', () => {
			expect(lpad('')).toBe('  ');
		});

		test('undefined -> "undefined"', () => {
			expect(lpad(undefined)).toBe('undefined');
		});
	});
});

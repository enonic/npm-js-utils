import {
	describe,
	expect,
	test
} from '@jest/globals';
import { camelize } from '../../index';


describe('string', () => {
	describe('camelize', () => {
		test('lower case -> lowerCase', () => {
			expect(camelize('lower case')).toBe('lowerCase');
		});
		test('UPPER CASE -> uPPERCASE', () => {
			expect(camelize('UPPER CASE')).toBe('uPPERCASE');
		});
		test('UPPER \\n\\r\\rCASE -> uPPERCASE', () => {
			expect(camelize(`UPPER \n\r\rCASE`)).toBe('uPPERCASE');
		});
		test('several-split-words /-/ -> severalSplit-Words', () => {
			expect(camelize('several-split-words', /-/)).toBe('severalSplit-Words');
		});
		test('several-split-words /-/g -> severalSplitWords', () => {
			expect(camelize('several-split-words', /-/g)).toBe('severalSplitWords');
		});
		test('empty string', () => {
			expect(camelize('')).toBe('');
		});
	});
});

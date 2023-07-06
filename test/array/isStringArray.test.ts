import {
	describe,
	expect,
	test as it
} from '@jest/globals';
// import isStringArray from '../../array/isStringArray'; // when testing just this function
import { isStringArray } from '../../index'; // to achieve 100% coverage of all functions in index.ts

import { EMPTY_ARRAY } from '@enonic/test-data';


describe('isStringArray', () => {
	it('returns true when the value is an empty array', () => {
		expect(isStringArray(EMPTY_ARRAY)).toBe(true);
	});
	it('returns true when the value is an array of strings', () => {
		expect(isStringArray(['a', 'b', 'c'])).toBe(true);
	});
	it('returns false when the value is NOT an array of strings', () => {
		expect(isStringArray(['a', 'b', new String()])).toBe(false);
	});
	it('returns false when the value is NOT even an array', () => {
		expect(isStringArray(undefined)).toBe(false);
		expect(isStringArray(null)).toBe(false);
		expect(isStringArray({})).toBe(false);
		expect(isStringArray('')).toBe(false);
		expect(isStringArray(false)).toBe(false);
		expect(isStringArray(true)).toBe(false);
	});
});

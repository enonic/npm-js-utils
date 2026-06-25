import {
	NOT_NULL
} from '@enonic/test-data';
import { deepStrictEqual } from 'assert';
import {
	describe,
	expect,
	test
} from '@jest/globals';
import { filterNils } from '../../index';

const NOT_NIL = NOT_NULL.filter(v => typeof v !== 'undefined');
const EVERYTHING = NOT_NULL.concat(null);

describe('value', () => {
	describe('filterNils', () => {
		test('returns empty array when value is [undefined, null]', () => {
			deepStrictEqual(
				filterNils([undefined, null]),
				[]
			)
		});

		test('returns array without null and undefined', () => {
			deepStrictEqual(
				filterNils(EVERYTHING),
				NOT_NIL
			)
		});

		test('throws when value is not array', () => {
			expect(() => filterNils(null)).toThrow();
			expect(() => filterNils(undefined)).toThrow();
			expect(() => filterNils('not an array' as any)).toThrow();
			expect(() => filterNils(42 as any)).toThrow();
			expect(() => filterNils({} as any)).toThrow();
		});
	});
});

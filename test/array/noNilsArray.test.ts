import {
	NOT_NULL
} from '@enonic/test-data';
import { deepStrictEqual } from 'assert';
import {
	describe,
	test
} from '@jest/globals';
import { noNilsArray } from '../../index';

const NOT_NIL = NOT_NULL.filter(v => typeof v !== 'undefined');
const EVERYTHING = NOT_NULL.concat(null);

describe('value', () => {
	describe('noNilsArray', () => {
		test('returns empty array when value is undefined', () => {
			deepStrictEqual(
				noNilsArray(undefined),
				[]
			)
		});
		test('returns empty array when value is null', () => {
			deepStrictEqual(
				noNilsArray(null),
				[]
			)
		});
		test('returns empty array when value is [undefined, null]', () => {
			deepStrictEqual(
				noNilsArray([undefined, null]),
				[]
			)
		});
		test('returns string array when value is string', () => {
			deepStrictEqual(
				noNilsArray('string'),
				['string']
			)
		});
		test('returns array without null and undefined', () => {
			deepStrictEqual(
				noNilsArray(EVERYTHING),
				NOT_NIL
			)
		});
	});
});

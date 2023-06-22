import {strictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isNotExistsFilter } from '../../../../index';

describe('isNotExistsFilter', () => {
	test('returns true when shape is correct', () => {
		strictEqual(
			true,
			isNotExistsFilter({
				notExists: {
					field: 'required'
				}
			})
		)
	});
	test('returns false when notExists.field is not a string', () => {
		strictEqual(
			false,
			isNotExistsFilter({
				notExists: {
					field: null
				}
			})
		)
	});
	test('returns false when notExists.field is missing', () => {
		strictEqual(
			false,
			isNotExistsFilter({
				notExists: {}
			})
		)
	});
	test('returns false when notExists not an object', () => {
		strictEqual(
			false,
			isNotExistsFilter({
				notExists: null
			})
		)
	});
	test('returns false when notExists is missing', () => {
		strictEqual(
			false,
			isNotExistsFilter({})
		)
	});
	test('returns false when params not an object', () => {
		strictEqual(
			false,
			isNotExistsFilter(null)
		)
	});
}); // describe isExistsFilter

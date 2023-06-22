import {strictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isExistsFilter } from '../../../../index';

describe('isExistsFilter', () => {
	test('returns true when shape is correct', () => {
		strictEqual(
			true,
			isExistsFilter({
				exists: {
					field: 'required'
				}
			})
		)
	});
	test('returns false when exists.field is not a string', () => {
		strictEqual(
			false,
			isExistsFilter({
				exists: {
					field: null
				}
			})
		)
	});
	test('returns false when exists.field is missing', () => {
		strictEqual(
			false,
			isExistsFilter({
				exists: {}
			})
		)
	});
	test('returns false when exists not an object', () => {
		strictEqual(
			false,
			isExistsFilter({
				exists: null
			})
		)
	});
	test('returns false when exists is missing', () => {
		strictEqual(
			false,
			isExistsFilter({})
		)
	});
	test('returns false when params not an object', () => {
		strictEqual(
			false,
			isExistsFilter(null)
		)
	});
}); // describe isExistsFilter

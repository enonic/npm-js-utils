import {strictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isHasValueFilter } from '../../../../index';

describe('isHasValueFilter', () => {
	test('returns true when shape is correct', () => {
		strictEqual(
			true,
			isHasValueFilter({
				hasValue: {
					field: 'required',
					values: []
				}
			})
		)
	});
	test('returns false when hasValue.field is not a string', () => {
		strictEqual(
			false,
			isHasValueFilter({
				hasValue: {
					field: null,
					values: []
				}
			})
		)
	});
	test('returns false when hasValue.field is missing', () => {
		strictEqual(
			false,
			isHasValueFilter({
				hasValue: {
					// field: undefined,
					values: []
				}
			})
		)
	});
	test('returns false when hasValue.values is not an array', () => {
		strictEqual(
			false,
			isHasValueFilter({
				hasValue: {
					field: 'required',
					values: 'not an array'
				}
			})
		)
	});
	test('returns false when hasValue.values is missing', () => {
		strictEqual(
			false,
			isHasValueFilter({
				hasValue: {
					field: 'required',
					//values: undefined
				}
			})
		)
	});
	test('returns false when hasValue not an object', () => {
		strictEqual(
			false,
			isHasValueFilter({
				hasValue: null
			})
		)
	});
	test('returns false when hasValue is missing', () => {
		strictEqual(
			false,
			isHasValueFilter({})
		)
	});
	test('returns false when params not an object', () => {
		strictEqual(
			false,
			isHasValueFilter(null)
		)
	});
}); // describe isExistsFilter

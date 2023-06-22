import {strictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isIdsFilter } from '../../../../index';

describe('isIdsFilter', () => {
	test('returns true when shape is correct', () => {
		strictEqual(
			true,
			isIdsFilter({
				ids: {
					values: ['string']
				}
			})
		)
	});
	test('returns false when ids.values is not an array', () => {
		strictEqual(
			false,
			isIdsFilter({
				ids: {
					values: 'string'
				}
			})
		)
	});
	test('returns false when ids.values is missing', () => {
		strictEqual(
			false,
			isIdsFilter({
				ids: {
					//values: undefined
				}
			})
		)
	});
	test('returns false when ids not an object', () => {
		strictEqual(
			false,
			isIdsFilter({
				ids: null
			})
		)
	});
	test('returns false when ids is missing', () => {
		strictEqual(
			false,
			isIdsFilter({})
		)
	});
	test('returns false when params not an object', () => {
		strictEqual(
			false,
			isIdsFilter(null)
		)
	});
}); // describe isExistsFilter

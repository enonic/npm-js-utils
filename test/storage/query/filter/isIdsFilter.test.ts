import {strictEqual} from 'assert';
import { isIdsFilter } from '../../../../index';

describe('isIdsFilter', () => {
	it('returns true when shape is correct', () => {
		strictEqual(
			true,
			isIdsFilter({
				ids: {
					values: ['string']
				}
			})
		)
	});
	it('returns false when ids.values is not an array', () => {
		strictEqual(
			false,
			isIdsFilter({
				ids: {
					values: 'string'
				}
			})
		)
	});
	it('returns false when ids.values is missing', () => {
		strictEqual(
			false,
			isIdsFilter({
				ids: {
					//values: undefined
				}
			})
		)
	});
	it('returns false when ids not an object', () => {
		strictEqual(
			false,
			isIdsFilter({
				ids: null
			})
		)
	});
	it('returns false when ids is missing', () => {
		strictEqual(
			false,
			isIdsFilter({})
		)
	});
	it('returns false when params not an object', () => {
		strictEqual(
			false,
			isIdsFilter(null)
		)
	});
}); // describe isExistsFilter

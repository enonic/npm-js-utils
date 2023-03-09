import {strictEqual} from 'assert';
import {isExistsFilter} from '@enonic/js-utils';

describe('isExistsFilter', () => {
	it('returns true when shape is correct', () => {
		strictEqual(
			true,
			isExistsFilter({
				exists: {
					field: 'required'
				}
			})
		)
	});
	it('returns false when exists.field is not a string', () => {
		strictEqual(
			false,
			isExistsFilter({
				exists: {
					field: null
				}
			})
		)
	});
	it('returns false when exists.field is missing', () => {
		strictEqual(
			false,
			isExistsFilter({
				exists: {}
			})
		)
	});
	it('returns false when exists not an object', () => {
		strictEqual(
			false,
			isExistsFilter({
				exists: null
			})
		)
	});
	it('returns false when exists is missing', () => {
		strictEqual(
			false,
			isExistsFilter({})
		)
	});
	it('returns false when params not an object', () => {
		strictEqual(
			false,
			isExistsFilter(null)
		)
	});
}); // describe isExistsFilter

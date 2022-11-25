import {strictEqual} from 'assert';
import {isHasValueFilter} from '../../../../src';

describe('isHasValueFilter', () => {
	it('returns true when shape is correct', () => {
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
	it('returns false when hasValue.field is not a string', () => {
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
	it('returns false when hasValue.field is missing', () => {
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
	it('returns false when hasValue.values is not an array', () => {
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
	it('returns false when hasValue.values is missing', () => {
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
	it('returns false when hasValue not an object', () => {
		strictEqual(
			false,
			isHasValueFilter({
				hasValue: null
			})
		)
	});
	it('returns false when hasValue is missing', () => {
		strictEqual(
			false,
			isHasValueFilter({})
		)
	});
	it('returns false when params not an object', () => {
		strictEqual(
			false,
			isHasValueFilter(null)
		)
	});
}); // describe isExistsFilter

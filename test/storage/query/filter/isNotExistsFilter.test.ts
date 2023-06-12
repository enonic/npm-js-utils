import {strictEqual} from 'assert';
import { isNotExistsFilter } from '../../../../index';

describe('isNotExistsFilter', () => {
	it('returns true when shape is correct', () => {
		strictEqual(
			true,
			isNotExistsFilter({
				notExists: {
					field: 'required'
				}
			})
		)
	});
	it('returns false when notExists.field is not a string', () => {
		strictEqual(
			false,
			isNotExistsFilter({
				notExists: {
					field: null
				}
			})
		)
	});
	it('returns false when notExists.field is missing', () => {
		strictEqual(
			false,
			isNotExistsFilter({
				notExists: {}
			})
		)
	});
	it('returns false when notExists not an object', () => {
		strictEqual(
			false,
			isNotExistsFilter({
				notExists: null
			})
		)
	});
	it('returns false when notExists is missing', () => {
		strictEqual(
			false,
			isNotExistsFilter({})
		)
	});
	it('returns false when params not an object', () => {
		strictEqual(
			false,
			isNotExistsFilter(null)
		)
	});
}); // describe isExistsFilter

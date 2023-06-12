import { NOT_BOOLEANS } from '@enonic/test-data';
import { equal } from 'assert';
import { toStr } from '../toStr';
import { isFalse } from '../../index';

describe('value', () => {
	describe('isFalse', () => {
		it('returns true when value is false -- false', () => {
			equal(
				isFalse(false),
				true
			)
		});
		[true as unknown].concat(NOT_BOOLEANS).forEach((value) => {
			it(`returns false when value is NOT false -- ${toStr(value)} `, () => {
				equal(
					isFalse(value),
					false
				)
			});
		});
	});
});

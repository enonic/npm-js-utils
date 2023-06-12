import { NOT_UNDEFINED } from '@enonic/test-data';
import { equal } from 'assert';
import { toStr } from '../toStr';
import { isUndefined } from '../../index';

describe('value', () => {
	describe('isUndefined', () => {
		it('returns true when value is undefined', () => {
			equal(
				isUndefined(undefined),
				true
			)
		});
		NOT_UNDEFINED.forEach((value) => {
			it(`returns false when value: ${toStr(value)} is defined`, () => {
				equal(
					isUndefined(value),
					false
				)
			});
		});
	});
});

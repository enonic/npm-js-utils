import { NOT_UNDEFINED } from '@enonic/test-data';
import { equal } from 'assert';
import { toStr } from '../toStr';
import { isUndefined } from '../../index';

describe('value', () => {
	describe('isUndefined', () => {
		it('returns true when value is undefined -- undefined', () => {
			equal(
				isUndefined(undefined),
				true
			)
		});
		NOT_UNDEFINED.forEach((value) => {
			it(`returns false when value is defined -- ${toStr(value)} `, () => {
				equal(
					isUndefined(value),
					false
				)
			});
		});
	});
});

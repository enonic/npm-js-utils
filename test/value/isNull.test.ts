import { NULL, NOT_NULL } from '@enonic/test-data';
import { equal } from 'assert';
import { toStr } from '../toStr';
import { isNull } from '../../index';


describe('value', () => {
	describe('isNull', () => {
		it('returns true when value is null -- undefined', () => {
			equal(
				isNull(NULL),
				true
			)
		});
		NOT_NULL.forEach((value) => {
			it(`returns false when value is NOT null -- ${toStr(value)} `, () => {
				equal(
					isNull(value),
					false
				)
			});
		});
	});
});

import {deepStrictEqual} from 'assert';
import { isLocalDateTimeString } from '../../index';
import {
	LOCAL_DATE_TIME_STRINGS,
	//LOCAL_DATE_TIME_STRINGS_INVALID
	//LOCAL_DATE_TIMES // contains LOCAL_DATE_TIME_STRINGS and DATE_OBJECT
	NOT_LOCAL_DATE_TIME_STRINGS // contains LOCAL_DATE_TIME_STRINGS_INVALID which contains INSTANT_STRINGS
} from '@enonic/test-data';
import {toStr} from '../toStr';


describe('value', () => {
	describe('isLocalDateTimeString()', () => {
		describe('--> true', () => {
			LOCAL_DATE_TIME_STRINGS.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isLocalDateTimeString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			NOT_LOCAL_DATE_TIME_STRINGS.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isLocalDateTimeString(params)
					);
				});
			});
		});
	});
});

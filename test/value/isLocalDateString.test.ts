import {deepStrictEqual} from 'assert';
import { isLocalDateString } from '../../index';
import {
	LOCAL_DATE_STRINGS,
	//LOCAL_DATES // contains DATE_OBJECTS
	NOT_LOCAL_DATE_STRINGS // contains LOCAL_DATE_STRINGS_INVALID
} from '@enonic/test-data';
import {toStr} from '../toStr';


describe('value', () => {
	describe('isLocalDateString()', () => {
		describe('--> true', () => {
			LOCAL_DATE_STRINGS.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isLocalDateString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			NOT_LOCAL_DATE_STRINGS.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isLocalDateString(params)
					);
				});
			});
		});
	});
});

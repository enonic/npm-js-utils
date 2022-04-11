import {deepStrictEqual} from 'assert';
import {isInstantString} from '../../src';
import {
	INSTANT_STRINGS,
	//INSTANT_STRINGS_INVALID
	//INSTANTS contains DATE_OBJECTS
	NOT_INSTANT_STRINGS //contains INSTANT_STRINGS_INVALID which contains LOCAL_DATE_TIME_STRINGS
} from '@enonic/test-data';
import {toStr} from '../toStr';


/*const TESTS_FALSE = [
	// instantString related, but not an actual instantString
	new Date(),
	new Date().toDateString(),
	new Date().toGMTString(),
	new Date().toLocaleDateString(),
	new Date().toLocaleString(),
	new Date().toLocaleTimeString(),
	//new Date().toSource(), // Deprecated
	new Date().toString(),
	new Date().toTimeString(),
	new Date().toUTCString(),
	Date.now(),
	Date.parse('2011-12-03T10:15:30Z'),
	Date.UTC()
];*/


describe('value', () => {
	describe('isInstantString()', () => {
		describe('--> true', () => {
			INSTANT_STRINGS.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isInstantString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			NOT_INSTANT_STRINGS.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isInstantString(params)
					);
				});
			});
		});
	});
});

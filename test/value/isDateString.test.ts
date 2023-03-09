import {deepStrictEqual} from 'assert';
import {
	isDateString,
	isInfinity,
	isNumber
} from '@enonic/js-utils';


const TESTS_TRUE = [
	'2011-12-03T10:15:30Z',
	new Date().toDateString(),

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
	// Just an alias to toUTCString
	// For some reason TypeScript doesn't include typings for it
	// new Date().toGMTString(),

	new Date().toJSON(),
	new Date().toLocaleDateString(),
	new Date().toLocaleString(),
	new Date().toISOString(),
	new Date().toString(),
	new Date().toUTCString()
];


const TESTS_FALSE = [
	// DateString related, but not an actual DateString
	new Date(),
	new Date().toLocaleTimeString(),
	//new Date().toSource(), // Deprecated
	new Date().toTimeString(),
	Date.now(),
	Date.parse('2011-12-03T10:15:30Z'),
	Date.UTC(2023, 3),
	// Invalid input
	'',
	true,
	false,
	[],
	{},
	-1,
	1,
	-Infinity,
	Infinity
];


function toStr(v) {
	if (isInfinity(v)) {
		return v;
	}
	if(isNumber(v) && (v < -9 || v > 9)) {
		return v.toExponential();
	}
	return JSON.stringify(v);
}


describe('value', () => {
	describe('isDateString()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isDateString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isDateString(params)
					);
				});
			});
		});
	});
});

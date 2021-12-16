import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isInstantString,
	isNumber
} from '../../dist/esm/index.mjs';


const TESTS_TRUE = [
	'2011-12-03T10:15:30Z',
	'2011-12-03T10:15:30.1Z',
	'2011-12-03T10:15:30.12Z',
	'2011-12-03T10:15:30.123Z',
	'2011-12-03T10:15:30.1234Z',
	'2011-12-03T10:15:30.12345Z',
	'2011-12-03T10:15:30.123456Z',
	'2011-12-03T10:15:30.1234567Z',
	'2011-12-03T10:15:30.12345678Z',
	'2011-12-03T10:15:30.123456789Z',
	new Date().toJSON(),
	new Date().toISOString(),

];


const TESTS_FALSE = [
	// Date.parse doesn't allow '2000-01-01T24:00:00Z'
	// For some reason lib-value.instant() does, but I'm sticking with Date.parse
	'2000-01-01T24:00:00Z',

	'2011-12-03T10:15Z', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15Z' could not be parsed at index 16
	'2011-12-03T10:15:30', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15:30' could not be parsed at index 19
	'2011-12-03T10:15:30.1234567890Z', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15:30.1234567890Z' could not be parsed at index 29
	'2002-12-31T23:00:00+01:00', // java.time.format.DateTimeParseException: Text '2002-12-31T23:00:00+01:00' could not be parsed at index 19
	// Right format, but invalid time
	'2000-00-01T00:00:00Z',
	'2000-01-00T00:00:00Z',
	'2000-13-01T00:00:00Z',
	'2000-01-32T00:00:00Z',
	'2000-01-01T24:00:01Z',
	'2000-01-01T25:00:00Z',
	'2000-01-01T00:60:00Z',
	'2000-01-01T00:00:60Z',
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
	Date.UTC(),
	// Invalid input
	'',
	'a',
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
	describe('isInstantString()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isInstantString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
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

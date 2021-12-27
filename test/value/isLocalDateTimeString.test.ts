import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isLocalDateTimeString,
	isNumber
} from '../../src';


const LOCAL_DATE_TIME_STRINGS_VALID = [
	'2007-12-03T10:15:30',
	'0000-01-01T00:00:00', // min
	'9999-12-31T23:59:59', // max
	'0000-01-01T00:00', // Surprise, this is allowed
	'0000-01-01T00:00:00.', // Surprise, also allowed
	'0000-01-01T00:00:00.0',
	'0000-01-01T00:00:00.1',
	'0000-01-01T00:00:00.12',
	'0000-01-01T00:00:00.123',
	'0000-01-01T00:00:00.1234',
	'0000-01-01T00:00:00.12345',
	'0000-01-01T00:00:00.123456',
	'0000-01-01T00:00:00.1234567',
	'0000-01-01T00:00:00.12345678',
	'0000-01-01T00:00:00.123456789',
	'0000-01-01T00:00:00.000000000',
];

const LOCAL_DATE_TIME_STRINGS_INVALID = [
	// Invalid format
	'0000-01-01', // Text '0000-01-01' could not be parsed at index 10 java.time.format.DateTimeParseException
	'0000-01-01T', // Text '0000-01-01T' could not be parsed at index 11 java.time.format.DateTimeParseException
	'0000-01-01T00', // Text '0000-01-01T00' could not be parsed at index 13 java.time.format.DateTimeParseException
	'0000-01-01T00:00.1', // Text '0000-01-01T00:00.1' could not be parsed, unparsed text found at index 16 java.time.format.DateTimeParseException
	'2007-12-03T10:15:30Z', // Text '2007-12-03T10:15:30Z' could not be parsed, unparsed text found at index 19 java.time.format.DateTimeParseException
	// Valid format, but invalid date
	'0000-00-01T00:00:00', // Text '0000-00-01T00:00:00' could not be parsed: Invalid value for MonthOfYear (valid values 1 - 12): 0 java.time.format.DateTimeParseException
	'0000-01-00T00:00:00', // Text '0000-01-00T00:00:00' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 0 java.time.format.DateTimeParseException
	'0000-01-01T24:00:00', // Text '0000-01-01T24:00:00' could not be parsed: Invalid value for HourOfDay (valid values 0 - 23): 24 java.time.format.DateTimeParseException
	'0000-01-01T00:60:00', // Text '0000-01-01T00:60:00' could not be parsed: Invalid value for MinuteOfHour (valid values 0 - 59): 60 java.time.format.DateTimeParseException
	'0000-01-01T00:00:60', // Text '0000-01-01T00:00:60' could not be parsed: Invalid value for SecondOfMinute (valid values 0 - 59): 60 java.time.format.DateTimeParseException
	'0000-01-01T00:00:00.1234567890', // Text '0000-01-01T00:00:00.1234567890' could not be parsed, unparsed text found at index 29 java.time.format.DateTimeParseException
	// localDateString related, but not an actual localDateString
	new Date(),
	new Date().toDateString(),
	new Date().toGMTString(),
	new Date().toJSON(),
	new Date().toLocaleDateString(),
	new Date().toLocaleString(),
	new Date().toLocaleTimeString(),
	new Date().toISOString(),
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
	describe('isLocalDateTimeString()', () => {
		describe('--> true', () => {
			LOCAL_DATE_TIME_STRINGS_VALID.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isLocalDateTimeString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			LOCAL_DATE_TIME_STRINGS_INVALID.forEach((params) => {
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

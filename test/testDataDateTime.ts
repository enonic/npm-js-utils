export const DATE_OBJECT = new Date();

export const DATE_OBJECTS = [
	DATE_OBJECT
];

export const DATE_OBJECT_STRINGS = [ // except the ones matching INSTANT format...
	DATE_OBJECT.toDateString(), // Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.
	//@ts-ignore
	DATE_OBJECT.toGMTString(), // Returns a string representing the Date based on the GMT (UTC) time zone. Use toUTCString() instead.
	DATE_OBJECT.toLocaleDateString(), // Returns a string with a locality sensitive representation of the date portion of this date based on system settings.
	DATE_OBJECT.toLocaleString(), // Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.
	DATE_OBJECT.toLocaleTimeString(), // Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.
	//DATE_OBJECT.toSource(), // Deprecated
	DATE_OBJECT.toString(), // Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.
	DATE_OBJECT.toTimeString(), // Returns the "time" portion of the Date as a human-readable string.
	DATE_OBJECT.toUTCString(), // Converts a date to a string using the UTC timezone.
];

export const MS_SINCE_EPOCH = [
	Date.now(), // Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
	Date.parse('Z'), // Parses a string representation of a date and returns the number of milliseconds since 1 January, 1970, 00:00:00 UTC, with leap seconds ignored.

	//Date.UTC() // NaN // Accepts the same parameters as the longest form of the constructor (i.e. 2 to 7) and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.
	Date.UTC(0,0,0,0,0,0), // -2209075200000 // Sun, 31 Dec 1899 00:00:00 GMT
	Date.UTC(96, 1, 2, 3, 4, 5) // 823230245000 // Fri, 02 Feb 1996 03:04:05 GMT
];

export const INSTANT_STRINGS = [
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
	DATE_OBJECT.toJSON(), // Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

	// Returns a string in simplified extended ISO format (ISO 8601),
	// which is always 24 or 27 characters long
	//    YYYY-MM-DDTHH:mm:ss.sssZ or
	// ±YYYYYY-MM-DDTHH:mm:ss.sssZ
	// The timezone is always zero UTC offset, as denoted by the suffix "Z".
	DATE_OBJECT.toISOString() // Converts a date to a string following the ISO 8601 Extended Format.
];

export const LOCAL_DATE_STRINGS = [
	'2011-12-03',
	'0000-01-01',
	'9999-12-31'
];

export const LOCAL_DATE_TIME_STRINGS = [
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
	'0000-01-01T00:00:00.000000000'
];

export const LOCAL_TIME_STRINGS = [
	'00:00',
	'00:00:00',
	'00:00:00.', // Allowed
	'00:00:00.1',
	'00:00:00.12',
	'00:00:00.123',
	'00:00:00.1234',
	'00:00:00.12345',
	'00:00:00.123456',
	'00:00:00.1234567',
	'00:00:00.12345678',
	'00:00:00.123456789'
];

//──────────────────────────────────────────────────────────────────────────────
// Invalid
//──────────────────────────────────────────────────────────────────────────────
export const INSTANT_STRINGS_INVALID = [
	'2011-12-03T10:15Z', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15Z' could not be parsed at index 16

	// This is a valid localDateTimeString! Added LOCAL_DATE_TIME_STRINGS to NOT_INSTANT_STRINGS
	//'2011-12-03T10:15:30', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15:30' could not be parsed at index 19

	'2011-12-03T10:15:30.1234567890Z', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15:30.1234567890Z' could not be parsed at index 29
	'2002-12-31T23:00:00+01:00', // java.time.format.DateTimeParseException: Text '2002-12-31T23:00:00+01:00' could not be parsed at index 19
	// Right format, but invalid time
	'2000-00-01T00:00:00Z',
	'2000-01-00T00:00:00Z',
	'2000-13-01T00:00:00Z',
	'2000-01-32T00:00:00Z',

	// Date.parse doesn't allow '2000-01-01T24:00:00Z'
	// For some reason lib-value.instant() does, but I'm sticking with Date.parse
	'2000-01-01T24:00:00Z',

	'2000-01-01T24:00:01Z',
	'2000-01-01T25:00:00Z',
	'2000-01-01T00:60:00Z',
	'2000-01-01T00:00:60Z'
];

export const LOCAL_DATE_STRINGS_INVALID = [
	// Invalid format
	'0000-1-01', // Text '0000-1-01' could not be parsed at index 5 java.time.format.DateTimeParseException
	'0000-01-01T', // Text '0000-01-01T' could not be parsed, unparsed text found at index 10 java.time.format.DateTimeParseException
	// Valid format, but invalid date
	'0000-00-01', // Text '0000-00-01' could not be parsed: Invalid value for MonthOfYear (valid values 1 - 12): 0 java.time.format.DateTimeParseException
	'0000-01-00', // Text '0000-01-00' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 0 java.time.format.DateTimeParseException
	'0000-13-01', // Text '0000-13-01' could not be parsed: Invalid value for MonthOfYear (valid values 1 - 12): 13 java.time.format.DateTimeParseException
	'0000-01-32' // Text '0000-01-32' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 32 java.time.format.DateTimeParseException
];

export const LOCAL_DATE_TIME_STRINGS_INVALID = [
	// Invalid format

	// This is a valid localDateString. Add LOCAL_DATE_STRINGS to NOT_LOCAL_DATE_TIME_STRINGS
	//'0000-01-01', // Text '0000-01-01' could not be parsed at index 10 java.time.format.DateTimeParseException

	'0000-01-01T', // Text '0000-01-01T' could not be parsed at index 11 java.time.format.DateTimeParseException
	'0000-01-01T00', // Text '0000-01-01T00' could not be parsed at index 13 java.time.format.DateTimeParseException
	'0000-01-01T00:00.1', // Text '0000-01-01T00:00.1' could not be parsed, unparsed text found at index 16 java.time.format.DateTimeParseException

	// This is a valid instant string, rather add INSTANT_STRINGS to NOT_LOCAL_DATE_TIME_STRING
	//'2007-12-03T10:15:30Z', // Text '2007-12-03T10:15:30Z' could not be parsed, unparsed text found at index 19 java.time.format.DateTimeParseException

	// Valid format, but invalid date
	'0000-00-01T00:00:00', // Text '0000-00-01T00:00:00' could not be parsed: Invalid value for MonthOfYear (valid values 1 - 12): 0 java.time.format.DateTimeParseException
	'0000-01-00T00:00:00', // Text '0000-01-00T00:00:00' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 0 java.time.format.DateTimeParseException
	'0000-01-01T24:00:00', // Text '0000-01-01T24:00:00' could not be parsed: Invalid value for HourOfDay (valid values 0 - 23): 24 java.time.format.DateTimeParseException
	'0000-01-01T00:60:00', // Text '0000-01-01T00:60:00' could not be parsed: Invalid value for MinuteOfHour (valid values 0 - 59): 60 java.time.format.DateTimeParseException
	'0000-01-01T00:00:60', // Text '0000-01-01T00:00:60' could not be parsed: Invalid value for SecondOfMinute (valid values 0 - 59): 60 java.time.format.DateTimeParseException
	'0000-01-01T00:00:00.1234567890' // Text '0000-01-01T00:00:00.1234567890' could not be parsed, unparsed text found at index 29 java.time.format.DateTimeParseException
];

export const LOCAL_TIME_STRINGS_INVALID = [
	/*'00:00',
	'00:00:00',
	'00:00:00.', // Allowed
	'00:00:00.1',
	'00:00:00.12',
	'00:00:00.123',
	'00:00:00.1234',
	'00:00:00.12345',
	'00:00:00.123456',
	'00:00:00.1234567',
	'00:00:00.12345678',
	'00:00:00.123456789'*/
	'00:00:00.1234567890'
];

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
export const INSTANTS = [].concat(
	INSTANT_STRINGS,
	DATE_OBJECTS
);

export const LOCAL_DATES = [].concat(
	LOCAL_DATE_STRINGS,
	DATE_OBJECTS
);

export const LOCAL_DATE_TIMES = [].concat(
	LOCAL_DATE_TIME_STRINGS,
	DATE_OBJECTS
);

export const LOCAL_TIMES = [].concat(
	LOCAL_TIME_STRINGS,
	DATE_OBJECTS
);

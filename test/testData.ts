export const BOOLEANS = [
	false,
	true
];

export const DATE_OBJECT = new Date();

export const DATE_OBJECTS = [
	DATE_OBJECT
];

export const EMPTY_ARRAY = [];

export const EMPTY_OBJECT = {};

export const EMPTY_STRING = '';

export const FLOATS = [
	-0.1,
	//-0.0, // Becomes to 0 which is an integer
	//0.0, // Becomes to 0 which is an integer
	0.1
];

export const FUNCTION = () => {};

export const GEOPOINT_ARRAYS = [
	[59.9090442,10.7423389],
	[-90,-180],
	[90,-180],
	[0,0],
	[-90,180],
	[90,180]
];

export const GEOPOINT_STRINGS = [
	'59.9090442,10.7423389',
	'-90,-180',
	'90,-180',
	'0,0',
	'-90,180',
	'90,180'
];

export const NUMBERS_INFINITE = [
	-Infinity,
	Infinity
];
export const INFINITIES = NUMBERS_INFINITE; // Deprecated

export const INTEGERS_NEGATIVE = [
	-1,
	//-0, // Becomes 0 which is a positive integer
];

export const INTEGERS_POSITIVE = [
	0,
	1
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
	'0000-01-01T00:00:00.000000000',
	DATE_OBJECT // Not a localDateTimeString, but lib-value.localDateTime() supports it
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

export const NAN = NaN;

export const NULL = null;

export const OBJECTS = [
	EMPTY_OBJECT,
	{ key: 'property' }
];

export const UNDEFINED = undefined;

export const UUID_V4 = [
	'c51c80c2-66a1-442a-91e2-4f55b4256a72',
	'00000000-0000-4000-8000-000000000000', // min
	'ffffffff-ffff-4fff-bfff-ffffffffffff' // max
];

//──────────────────────────────────────────────────────────────────────────────
// Invalid
//──────────────────────────────────────────────────────────────────────────────
export const GEOPOINT_ARRAYS_INVALID = [
	[-91,-180],
	[-90,-181],
	[91,-180],
	[90,-181],
	[-91,180],
	[-90,181],
	[91,180],
	[90,181]
];

export const GEOPOINT_STRINGS_INVALID = [
	'-91,-180',
	'-90,-181',
	'91,-180',
	'90,-181',
	'-91,180',
	'-90,181',
	'91,180',
	'90,181'
];

export const INSTANT_STRINGS_INVALID = [
	'2011-12-03T10:15Z', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15Z' could not be parsed at index 16
	'2011-12-03T10:15:30', // java.time.format.DateTimeParseException: Text '2011-12-03T10:15:30' could not be parsed at index 19
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
	'2000-01-01T00:00:60Z',
];

export const LOCAL_DATE_STRINGS_INVALID = [
	// Invalid format
	'0000-1-01', // Text '0000-1-01' could not be parsed at index 5 java.time.format.DateTimeParseException
	'0000-01-01T', // Text '0000-01-01T' could not be parsed, unparsed text found at index 10 java.time.format.DateTimeParseException
	// Valid format, but invalid date
	'0000-00-01', // Text '0000-00-01' could not be parsed: Invalid value for MonthOfYear (valid values 1 - 12): 0 java.time.format.DateTimeParseException
	'0000-01-00', // Text '0000-01-00' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 0 java.time.format.DateTimeParseException
	'0000-13-01', // Text '0000-13-01' could not be parsed: Invalid value for MonthOfYear (valid values 1 - 12): 13 java.time.format.DateTimeParseException
	'0000-01-32', // Text '0000-01-32' could not be parsed: Invalid value for DayOfMonth (valid values 1 - 28/31): 32 java.time.format.DateTimeParseException
	// localDateString related, but not an actual localDateString
	DATE_OBJECT.toDateString(),
	DATE_OBJECT.toGMTString(),
	DATE_OBJECT.toJSON(),
	DATE_OBJECT.toLocaleDateString(),
	DATE_OBJECT.toLocaleString(),
	DATE_OBJECT.toLocaleTimeString(),
	DATE_OBJECT.toISOString(),
	//DATE_OBJECT.toSource(), // Deprecated
	DATE_OBJECT.toString(),
	DATE_OBJECT.toTimeString(),
	DATE_OBJECT.toUTCString(),
	Date.now(),
	Date.parse('2011-12-03T10:15:30Z'),
	Date.UTC(),
	// Invalid input
	EMPTY_STRING,
	'a',
	true,
	false,
	//EMPTY_ARRAY,
	{},
	-1,
	1,
	-Infinity,
	Infinity
];

export const LOCAL_DATE_TIME_STRINGS_INVALID = [
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
	// localDateTimeString related, but not an actual localDateTimeString
	DATE_OBJECT.toDateString(),
	DATE_OBJECT.toGMTString(),
	DATE_OBJECT.toJSON(),
	DATE_OBJECT.toLocaleDateString(),
	DATE_OBJECT.toLocaleString(),
	DATE_OBJECT.toLocaleTimeString(),
	DATE_OBJECT.toISOString(),
	//DATE_OBJECT.toSource(), // Deprecated
	DATE_OBJECT.toString(),
	DATE_OBJECT.toTimeString(),
	DATE_OBJECT.toUTCString(),
	Date.now(),
	Date.parse('2011-12-03T10:15:30Z'),
	Date.UTC(),
	// Invalid input
	EMPTY_STRING,
	'a',
	true,
	false,
	//EMPTY_ARRAY,
	{},
	-1,
	1,
	-Infinity,
	Infinity
];

export const UUID_NIL = '00000000-0000-0000-0000-000000000000';

export const UUID_V4_INVALID = [
	UUID_NIL,
//   123456789012345678901234567890123456
	'00000000-0000-3000-8000-000000000000', // bit 15 must be a 4, 3 is too low
	'00000000-0000-4000-7000-000000000000', // bit 20 must be [89ab], 7 is too low
	'ffffffff-ffff-5fff-8fff-ffffffffffff', // bit 15 must be a 4, 5 is too high
	'ffffffff-ffff-4fff-cfff-ffffffffffff', // bit 20 must be [89ab], c is too high
	'ffffffff-ffff-4fff-8fff-fffffffffffg' // no bit can be beyond f
];

export const NOT_UUID_V4 = [
	...UUID_V4_INVALID,
	EMPTY_STRING,
	'a',
	true,
	false,
	//EMPTY_ARRAY,
	{},
	-1,
	1,
	-Infinity,
	Infinity
];

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
export const GEOPOINTS = GEOPOINT_ARRAYS.concat(GEOPOINT_STRINGS);

export const GEOPOINTS_INVALID = GEOPOINT_ARRAYS_INVALID.concat(GEOPOINT_STRINGS_INVALID);

export const INSTANTS = INSTANT_STRINGS.concat(DATE_OBJECTS);

export const INTEGERS = [].concat(
	INTEGERS_NEGATIVE,
	INTEGERS_POSITIVE,
	...GEOPOINT_ARRAYS_INVALID // Flattened array of integers
);

export const LOCAL_DATES = LOCAL_DATE_STRINGS.concat(DATE_OBJECTS);

export const LOCAL_DATE_TIMES = LOCAL_DATE_TIME_STRINGS.concat(DATE_OBJECTS);

export const LOCAL_TIMES = LOCAL_TIME_STRINGS.concat(DATE_OBJECTS);

export const NUMBERS_FINITE = [].concat(
	INTEGERS,
	FLOATS
);

export const NUMBERS = [].concat(
	NUMBERS_FINITE,
	NUMBERS_INFINITE
);

export const STRINGS = [
	EMPTY_STRING,
	'a',
	'true',
	'false',
	'[]',
	'{}',
	'-Infinity',
	'-1',
	'-0.1',
	'-0.0',
	'-0',
	'0',
	'0.0',
	'0.1',
	'1',
	'Infinity',
	'new Date()'
]/*.concat(
	//GEOPOINT_STRINGS,
	GEOPOINT_STRINGS_INVALID,
	//INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,
	//LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS_INVALID,
	UUID_NIL
)*/;

//──────────────────────────────────────────────────────────────────────────────
// NOT
//──────────────────────────────────────────────────────────────────────────────
export const NOT_BOOLEANS = [].concat(
	//BOOLEANS,
	DATE_OBJECTS,
	//EMPTY_ARRAY, // Enonic XP doesn't index an empty array
	EMPTY_OBJECT,
	FUNCTION,
	GEOPOINTS,
	NAN,
	//NULL, // Enonic XP doesn't index an empty null
	NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_DATE_OBJECTS = [].concat(
	BOOLEANS,
	//DATE_OBJECTS,
	//EMPTY_ARRAY, // Enonic XP doesn't index an empty array
	EMPTY_OBJECT,
	FUNCTION,
	GEOPOINTS,
	NAN,
	//NULL, // Enonic XP doesn't index null
	NUMBERS,
	STRINGS//,
	// UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_GEOPOINTS = [].concat(
	GEOPOINTS_INVALID,
	BOOLEANS,
	DATE_OBJECTS,
	//EMPTY_ARRAY, // Enonic XP doesn't index an empty array
	EMPTY_OBJECT,
	//FLOATS, // -0.0 and 0 becomes 0 which is an integer
	FUNCTION,
	//GEOPOINTS, // Array of integer and floats
	NAN,
	//NULL, // Enonic XP doesn't index null
	NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_INSTANT_STRINGS = [].concat(
	INSTANT_STRINGS_INVALID,
	BOOLEANS,
	DATE_OBJECTS,
	EMPTY_ARRAY,
	EMPTY_OBJECT,
	FUNCTION,
	GEOPOINTS, // Array of integer and floats
	NAN,
	NULL, // Enonic XP doesn't index null
	NUMBERS,
	STRINGS,
	UNDEFINED
);

export const NOT_LOCAL_DATE_STRINGS = [].concat(
	LOCAL_DATE_STRINGS_INVALID,
	BOOLEANS,
	DATE_OBJECTS,
	EMPTY_ARRAY,
	EMPTY_OBJECT,
	FUNCTION,
	GEOPOINTS, // Array of integer and floats
	NAN,
	NULL, // Enonic XP doesn't index null
	NUMBERS,
	STRINGS,
	UNDEFINED
);

export const NOT_NUMBERS = [].concat(
	BOOLEANS,
	DATE_OBJECTS,
	EMPTY_ARRAY,
	EMPTY_OBJECT,
	FUNCTION,
	//GEOPOINTS, // Array of integer and floats
	NAN,
	//NULL, // Enonic XP doesn't index null
	//NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_INTEGERS = [].concat(
	FLOATS,
	NUMBERS_INFINITE,
	NOT_NUMBERS
);

export const NOT_OBJECTS = [].concat(
	BOOLEANS,
	DATE_OBJECTS,
	EMPTY_ARRAY,
	//EMPTY_OBJECT,
	FUNCTION,
	GEOPOINTS, // Array of integer and floats
	NAN,
	NULL,
	NUMBERS,
	STRINGS//,
	//UNDEFINED // Enonic XP doesn't index undefined
);

export const NOT_STRINGS = [].concat(
	BOOLEANS,
	DATE_OBJECTS,
	//EMPTY_ARRAY, // Enonic XP doesn't index an empty array
	EMPTY_OBJECT,
	FUNCTION,
	GEOPOINT_ARRAYS,
	//GEOPOINT_STRINGS,
	NAN,
	//NULL, // Enonic XP doesn't index null
	NUMBERS//,
	//STRINGS,
	//UNDEFINED // Enonic XP doesn't index undefined
);

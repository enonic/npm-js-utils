import {
	//DATE_OBJECT,
	DATE_OBJECT_STRINGS,
	DATE_OBJECTS,
	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,
	//INSTANTS,
	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,
	//LOCAL_DATES,
	//LOCAL_DATE_TIMES,
	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,
	//LOCAL_TIMES
	MS_SINCE_EPOCH
} from './testDataDateTime';

import {
	GEOPOINT_ARRAYS,
	//GEOPOINT_STRINGS,
	//GEOPOINT_ARRAYS_INVALID,
	//GEOPOINT_STRINGS_INVALID,
	GEOPOINTS,
	GEOPOINTS_INVALID
} from './testDataGeoPoint';

import {
	FLOATS,
	NUMBERS_INFINITE,
	//INTEGERS_NEGATIVE,
	//INTEGERS_POSITIVE,
	NAN,
	//INTEGERS,
	//NUMBERS_FINITE,
	NUMBERS
} from './testDataNumber';

import {
	//UUID_NIL,
	//UUID_V4,
	UUID_V4_INVALID
} from './testDataUuid';

//──────────────────────────────────────────────────────────────────────────────

export {
	DATE_OBJECT,
	DATE_OBJECTS,
	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,
	INSTANTS,
	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,
	LOCAL_DATES,
	LOCAL_DATE_TIMES,
	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,
	LOCAL_TIMES
} from './testDataDateTime';

export {
	GEOPOINT_ARRAYS,
	GEOPOINT_STRINGS,
	GEOPOINT_ARRAYS_INVALID,
	GEOPOINT_STRINGS_INVALID,
	GEOPOINTS,
	GEOPOINTS_INVALID
} from './testDataGeoPoint';

export {
	FLOATS,
	NUMBERS_INFINITE,
	INTEGERS_NEGATIVE,
	INTEGERS_POSITIVE,
	NAN,
	INTEGERS,
	NUMBERS_FINITE,
	NUMBERS
} from './testDataNumber';

export {
	UUID_NIL,
	UUID_V4,
	UUID_V4_INVALID
} from './testDataUuid';

//──────────────────────────────────────────────────────────────────────────────

export const BOOLEANS = [
	false,
	true
];

export const EMPTY_ARRAY = [];

export const EMPTY_OBJECT = {};

export const EMPTY_STRING = '';

export const FUNCTION = () => {};

export const NULL = null;

export const OBJECTS = [
	EMPTY_OBJECT,
	{ key: 'property' }
];

export const UNDEFINED = undefined;

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
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
	LOCAL_TIME_STRINGS_INVALID,

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
	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,

	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,

	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,

	DATE_OBJECTS,
	DATE_OBJECT_STRINGS,
	MS_SINCE_EPOCH,

	BOOLEANS,
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

	LOCAL_DATE_TIME_STRINGS,
	LOCAL_DATE_TIME_STRINGS_INVALID,

	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,

	DATE_OBJECTS,

	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,

	DATE_OBJECT_STRINGS,
	MS_SINCE_EPOCH,

	BOOLEANS,
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

export const NOT_LOCAL_DATE_TIME_STRINGS = [].concat(
	LOCAL_DATE_TIME_STRINGS_INVALID,

	INSTANT_STRINGS,
	INSTANT_STRINGS_INVALID,

	DATE_OBJECTS,

	LOCAL_DATE_STRINGS,
	LOCAL_DATE_STRINGS_INVALID,

	LOCAL_TIME_STRINGS,
	LOCAL_TIME_STRINGS_INVALID,

	DATE_OBJECT_STRINGS,
	MS_SINCE_EPOCH,

	BOOLEANS,
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

// Have to be placed after NOT_NUMBERS...
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

import {GEOPOINT_ARRAYS_INVALID} from './testDataGeoPoint';


export const FLOATS = [
	-0.1,
	//-0.0, // Becomes to 0 which is an integer
	//0.0, // Becomes to 0 which is an integer
	0.1
];
export const STRINGS_FLOAT = FLOATS.map(i => ''+i);
//console.debug('STRINGS_FLOAT', STRINGS_FLOAT);


export const NUMBERS_INFINITE = [
	-Infinity,
	Infinity
];
export const STRINGS_NUMBER_INFINITE = NUMBERS_INFINITE.map(i => ''+i);
//console.debug('STRINGS_NUMBER_INFINITE', STRINGS_NUMBER_INFINITE);

export const INTEGERS_NEGATIVE = [
	-10,
	-1,
	//-0, // Becomes 0 which is a positive integer
];
export const STRINGS_INTEGER_NEGATIVE = INTEGERS_NEGATIVE.map(i => ''+i);
//console.debug('STRINGS_INTEGER_NEGATIVE', STRINGS_INTEGER_NEGATIVE);

export const INTEGERS_POSITIVE = [ // Natural number (excludes zero)
	1,
	10
];
export const STRINGS_INTEGER_POSITIVE = INTEGERS_POSITIVE.map(i => ''+i);
//console.debug('STRINGS_INTEGER_POSITIVE', STRINGS_INTEGER_POSITIVE);

export const INTEGERS_NON_NEGATIVE = [0].concat(INTEGERS_POSITIVE); // Whole number (includes zero)
export const STRINGS_INTEGER_NON_NEGATIVE = INTEGERS_NON_NEGATIVE.map(i => ''+i)
//console.debug('STRINGS_INTEGER_NON_NEGATIVE', STRINGS_INTEGER_NON_NEGATIVE);


export const NAN = NaN;
export const STRING_NAN = ''+NAN;
//console.debug('STRING_NAN', [STRING_NAN]);

//──────────────────────────────────────────────────────────────────────────────
// Derived
//──────────────────────────────────────────────────────────────────────────────
export const INTEGERS = [].concat(
	INTEGERS_NEGATIVE,
	INTEGERS_POSITIVE,
	...GEOPOINT_ARRAYS_INVALID // Flattened array of integers
);

export const NUMBERS_FINITE = [].concat(
	INTEGERS,
	FLOATS
);

export const NUMBERS = [].concat(
	NUMBERS_FINITE,
	NUMBERS_INFINITE
);

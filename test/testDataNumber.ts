import {GEOPOINT_ARRAYS_INVALID} from './testDataGeoPoint';


export const FLOATS = [
	-0.1,
	//-0.0, // Becomes to 0 which is an integer
	//0.0, // Becomes to 0 which is an integer
	0.1
];

export const NUMBERS_INFINITE = [
	-Infinity,
	Infinity
];

export const INTEGERS_NEGATIVE = [
	-1,
	//-0, // Becomes 0 which is a positive integer
];

export const INTEGERS_POSITIVE = [
	0,
	1
];

export const NAN = NaN;

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

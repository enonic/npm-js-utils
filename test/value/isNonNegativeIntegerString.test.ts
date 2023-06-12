import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isNumber,
	isNonNegativeIntegerString
} from '../../index';

import {
	FLOATS,
	INTEGERS_NEGATIVE,
	INTEGERS_NON_NEGATIVE,
	NUMBERS_INFINITE,
	//NOT_NUMBERS,
	NOT_STRINGS,
	STRINGS_BOOLEAN,
	STRING_EMPTY_ARRAY,
	STRING_EMPTY_OBJECT,
	STRINGS_FLOAT,
	STRINGS_INTEGER_NEGATIVE,
	STRING_NAN,
	STRINGS_NUMBER_INFINITE
} from '@enonic/test-data';


const TESTS_TRUE = [].concat(
	INTEGERS_NON_NEGATIVE
);

const TESTS_FALSE = [].concat(
	[
		STRING_EMPTY_ARRAY,
		STRING_EMPTY_OBJECT,
		STRING_NAN
	],
	INTEGERS_NEGATIVE,
	FLOATS,
	NUMBERS_INFINITE,
	//NOT_NUMBERS
	NOT_STRINGS,
	STRINGS_BOOLEAN,
	STRINGS_FLOAT,
	STRINGS_INTEGER_NEGATIVE,
	STRINGS_NUMBER_INFINITE
);


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
	describe('isNonNegativeIntegerString()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`'${params}'`, () => {
					deepStrictEqual(
						true,
						isNonNegativeIntegerString(`${params}`)
					);
				});
			});
		}); // describe true
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isNonNegativeIntegerString(params)
					);
				});
			});
		}); // describe false
	}); // describe isNonNegativeIntegerString
}); // describe value

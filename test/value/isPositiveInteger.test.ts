import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {
	isInfinity,
	isNumber,
	isPositiveInteger
} from '../../index';

import {
	FLOATS,
	INTEGERS_NEGATIVE,
	INTEGERS_NON_NEGATIVE,
	NUMBERS_INFINITE,
	NOT_NUMBERS
} from '@enonic/test-data';


const TESTS_TRUE = [].concat(
	INTEGERS_NON_NEGATIVE
);

const TESTS_FALSE = [].concat(
	INTEGERS_NEGATIVE,
	FLOATS,
	NUMBERS_INFINITE,
	NOT_NUMBERS
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
	describe('isPositiveInteger()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				test(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isPositiveInteger(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				test(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isPositiveInteger(params)
					);
				});
			});
		});
	});
});

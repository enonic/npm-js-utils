import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isNumber,
	isPositiveInteger
} from '../../dist/esm/index.mjs';

import {
	FLOATS,
	INTEGERS_NEGATIVE,
	INTEGERS_POSITIVE,
	INFINITIES,
	NOT_NUMBERS
} from '../testData.mjs'


const TESTS_TRUE = [].concat(
	INTEGERS_POSITIVE
);

const TESTS_FALSE = [].concat(
	INTEGERS_NEGATIVE,
	FLOATS,
	INFINITIES,
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
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isPositiveInteger(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isPositiveInteger(params)
					);
				});
			});
		});
	});
});

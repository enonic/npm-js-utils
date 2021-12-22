import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isNumber,
	isInteger
} from '../../dist/esm/index.mjs';

import {
	FLOATS,
	INTEGERS,
	INFINITIES,
	NOT_NUMBERS
} from '../testData.mjs'


const TESTS_TRUE = [].concat(
	INTEGERS
);

const TESTS_FALSE = [].concat(
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
	describe('isInteger()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isInteger(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isInteger(params)
					);
				});
			});
		});
	});
});

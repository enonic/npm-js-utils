import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isNumber,
	isObject
} from '../../dist/esm/index.mjs';


const TESTS_TRUE = [
	{},
	{ key: 'property' }
];

const TESTS_FALSE = [
	undefined,
	null,
	'',
	'string',
	true,
	false,
	[],
	//{},
	-Infinity,
	-1,
	-0.1,
	-0.0,
	0,
	0.0,
	0.1,
	1,
	Infinity,
	new Date(),
	() => {},
	NaN
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
	describe('isObject()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isObject(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isObject(params)
					);
				});
			});
		});
	});
});

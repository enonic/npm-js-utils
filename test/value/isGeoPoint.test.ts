import {deepStrictEqual} from 'assert';
import {
	isGeoPoint,
	isInfinity,
	isNumber
} from '../../src';


const TESTS_TRUE = [
	[59.9090442,10.7423389],
	[-90,-180],
	[90,-180],
	[0,0],
	[-90,180],
	[90,180],
	'59.9090442,10.7423389',
	'-90,-180',
	'90,-180',
	'0,0',
	'-90,180',
	'90,180'
];


const TESTS_FALSE = [
	// Invalid input
	'',
	true,
	false,
	[],
	{},
	-1,
	1,
	-Infinity,
	Infinity,
	new Date(),
	'a,a',
	'0.0',
	[true,true],
	[false,false],
	['a','b'],

	// "Valid", but outside range
	'-90.1,0',
	'90.1,0',
	'0,-180.1',
	'0,180.1',
	[-90.1,0],
	[90.1,0],
	[0,-180.1],
	[0,180.1],
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
	describe('isGeoPoint()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isGeoPoint(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isGeoPoint(params)
					);
				});
			});
		});
	});
});

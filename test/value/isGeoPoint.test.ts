import {deepStrictEqual} from 'assert';
import {
	isGeoPoint,
	isInfinity,
	isNumber
} from '../../src';
import {
	GEOPOINTS,
	GEOPOINTS_INVALID
} from '../testData';


const TESTS_FALSE = [].concat(GEOPOINTS_INVALID, [
	// Invalid input
	[0,0,0], // Array of number
	'0,0,0',
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
], );


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
			GEOPOINTS.forEach((params) => {
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

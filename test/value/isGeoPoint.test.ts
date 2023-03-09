import {
	GEOPOINTS,
	GEOPOINTS_INVALID
} from '@enonic/test-data';
import {deepStrictEqual} from 'assert';

import {isGeoPoint} from '@enonic/js-utils';
import {toStr} from '../toStr';


const TESTS_FALSE = [].concat(
	GEOPOINTS_INVALID,
	[
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
	]
);
console.debug('TESTS_FALSE:', TESTS_FALSE);


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

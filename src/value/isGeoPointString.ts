import type {GeoPointString} from '../index.d';

import {isGeoPointArray} from './isGeoPointArray';
import {isString} from './isString';


export function isGeoPointString(v :GeoPointString | unknown) :v is GeoPointString {
	if (!isString(v)) { return false; }

	const array = (v as string).split(',');
	if (array.length !== 2) {
		return false;
	}

	//const [lat, lon] :string[] = array; error TS2354: This syntax requires an imported helper but module 'tslib' cannot be found.
	const lat = v[0];
	const lon = v[1];

	if (!isString(lat) || !isString(lon)) {	return false; }

	return isGeoPointArray([
		parseFloat(lat as string),
		parseFloat(lon as string)
	]);
}

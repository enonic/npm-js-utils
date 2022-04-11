import type {GeoPointString} from '../index.d';

import {isGeoPointArray} from './isGeoPointArray';
import {isString} from './isString';


export function isGeoPointString(v :GeoPointString | unknown) :v is GeoPointString {
	if (!isString(v)) { return false; }

	const array = (v as string).split(',');
	if (array.length !== 2) {
		return false;
	}

	// tslib is required (transpile time) to support Array deconstruction.
	// Even though it's easy to avoid using Array deconstruction,
	//  since tslib is already used for export {} from,
	//   it's kept as a development dependency.
	const [lat, lon] :string[] = array;

	if (!isString(lat) || !isString(lon)) {	return false; }

	return isGeoPointArray([
		parseFloat(lat as string),
		parseFloat(lon as string)
	]);
}

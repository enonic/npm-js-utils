import type {GeoPointString} from '../mock/value';

import {isGeoPointArray} from './isGeoPointArray';
import {isString} from './isString';


export function isGeoPointString(v :GeoPointString | unknown) :v is GeoPointString {
	if (!isString(v)) { return false; }

	const [lat, lon] :string[] = (v as string).split(',');

	if (!isString(lat) || !isString(lon)) {	return false; }

	return isGeoPointArray([
		parseFloat(lat as string),
		parseFloat(lon as string)
	]);
}

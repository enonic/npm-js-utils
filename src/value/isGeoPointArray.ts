import type {GeoPointArray} from '../mock/value';

import {isNumber} from './isNumber';


export function isGeoPointArray(v :GeoPointArray | unknown) :v is GeoPointArray {
	if (!Array.isArray(v)) { return false; }

	const [lat, lon] :number[] = v;
	if (!isNumber(lat) && !isNumber(lon)) { return false; }

	if ((lat as number) < -90 || (lat as number) > 90) { return false; }

	if ((lon as number) < -180 || (lon as number) > 180) { return false; }

	return true;
}

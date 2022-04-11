import type {GeoPointArray} from '../index.d';

import {isNumber} from './isNumber';


export function isGeoPointArray(v :GeoPointArray | unknown) :v is GeoPointArray {
	if (
		!Array.isArray(v)
		|| v.length !== 2 // Even if the two first items are valid, if there are more items, it's not a GeoPointArray
	) { return false; }

	//const [lat, lon] :number[] = v; // error TS2354: This syntax requires an imported helper but module 'tslib' cannot be found.
	const lat = v[0];
	const lon = v[1];

	if (!isNumber(lat) && !isNumber(lon)) { return false; }

	if ((lat as number) < -90 || (lat as number) > 90) { return false; }

	if ((lon as number) < -180 || (lon as number) > 180) { return false; }

	return true;
}

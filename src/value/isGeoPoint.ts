import {isGeoPointArray} from './isGeoPointArray';
import {isGeoPointString} from './isGeoPointString';
import {isString} from './isString';


export function isGeoPoint(v :unknown) :boolean {
	return isString(v)
		? isGeoPointString(v)
		: isGeoPointArray(v)
}

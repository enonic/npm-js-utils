import {isGeoPointArray} from './isGeoPointArray';
import {isString} from './isString';


export function isGeoPointString(v :unknown) :boolean {
	if (!isString(v)) { return false; }

	const [lat, lon] :string[] = (v as string).split(',');

	if (!isString(lat) || !isString(lon)) {	return false; }

	return isGeoPointArray([
		parseFloat(lat as string),
		parseFloat(lon as string)
	]);
}

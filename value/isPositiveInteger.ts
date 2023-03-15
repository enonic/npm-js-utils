import {isInt} from './isInt';


export function isPositiveInteger(v :unknown) :boolean {
	if (
		!isInt(v)
		|| (v as number < 0)
	) { return false; }
	return true;
}

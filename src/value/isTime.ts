//──────────────────────────────────────────────────────────────────────────────
//
// isTime should be true for what '/lib/xp/value'.localTime() supports
// Basically the same as java.time.format.DateTimeParse
//
//──────────────────────────────────────────────────────────────────────────────
import {isDate} from './isDate';
import {isTimeString} from './isTimeString';


export function isTime(
	v :unknown
) :boolean {
	return isDate(v) || isTimeString(v);
}

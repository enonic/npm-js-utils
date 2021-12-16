// NOTE: Date.parse() doesn't allow '2000-01-01T24:00:00Z'
// For some reason lib-value.instant() does, but I'm sticking with Date.parse().
import {isString} from './isString';


const REGEXP_INSTANT = /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(\.\d{0,9})?Z$/;


export function isInstantString(v :unknown) :boolean {
	if (!isString(v)) { return false; }
	const matches = (v as string).match(REGEXP_INSTANT);
	//console.debug('matches', matches);

	if (matches) {
		try {
			const d = new Date(Date.parse(matches[0] as string));
			//console.debug('d', d, 'd.toISOString()', d.toISOString());
			if ((v as string).substring(0,19) === d.toISOString().substring(0,19)) {
				return true;
			}
			return false;
		} catch (e) {
			//console.error(`new Date(Date.parse(${matches[0]})) throwed`, e);
			//return false; // TODO can one return from catch?
		}
	}
	return false;
}

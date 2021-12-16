import {isString} from './isString';


const REGEXP_DATE = /^\d{4}-\d{2}-\d{2}$/


export function isLocalDateString(v :unknown) :boolean {
	if (!isString(v)) { return false; }
	const matches = (v as string).match(REGEXP_DATE);
	//console.debug('matches', matches);
	if (matches) {
		try {
			const d = new Date(Date.parse(matches[0] as string));
			//console.debug('d', d, 'd.toISOString()', d.toISOString());
			if ((v as string).substring(0,10) === d.toISOString().substring(0,10)) {
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

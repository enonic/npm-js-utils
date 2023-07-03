import {isString} from './isString';


const REGEXP_DATE = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d{0,9})?)?$/ // Same as instant, but no Z on the end.


// /lib/xp/value localDateTime(value: string | Date): LocalDateTime
// TODO Use Branding or template string to narrow string?
export function isLocalDateTimeString(v: unknown): v is string {
	if (!isString(v)) { return false; }
	const matches = (v as string).match(REGEXP_DATE);
	//console.debug('matches', matches);
	if (matches) {
		const localDateTimeStringToParse :string = `${(matches[0] as string).substring(0,19)}Z`;
		try {
			// This was a fails before '0000-01-01T00:00:00.Z'
			//console.debug('localDateTimeStringToParse', localDateTimeStringToParse);
			const d = new Date(Date.parse(localDateTimeStringToParse));
			//console.debug('d', d, 'd.toISOString()', d.toISOString());
			let inputTrimmed = (v as string).substring(0,19);
			if (inputTrimmed.length === 16) {
				inputTrimmed += ':00'
			}
			//console.debug('inputTrimmed', inputTrimmed);
			// toISOString and toJSON Can change hour... or perhaps even date?
			const parsedTrimmed = d.toJSON().substring(0,19);
			//console.debug('parsedTrimmed', parsedTrimmed);
			if (inputTrimmed === parsedTrimmed) {
				return true;
			}
			return false;
		} catch (e) {
			//console.error(`new Date(Date.parse(${localDateTimeStringToParse})) throwed`, e);
			//return false; // TODO can one return from catch?
		}
	}
	return false;
}

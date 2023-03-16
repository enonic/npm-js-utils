//──────────────────────────────────────────────────────────────────────────────
//
// isTimeString should be true for what '/lib/xp/value'.localTime() supports, except Date obj.
// Basically the same as java.time.format.DateTimeParse
//
//──────────────────────────────────────────────────────────────────────────────
import {isString} from './isString';


//const MAX_SUBSECONDS = 9;
const REGEXP_TIME = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9](\.\d{0,9})?)?$/


export function isTimeString(
	v :unknown
) :boolean {
	if (!isString(v)) { return false; }
	return REGEXP_TIME.test(v as string);
	//return !!(v as string).match(REGEXP_TIME);
	/* Keeping this unfinished code, because regexp might not be supported everywhere...?
	const parts :string[] = (v as string).split(':');
	if (parts.length < 2 || parts.length > 3) {
		return false;
	}

	let [
		h,
		m,
		s // optional
	] :string[] = parts;
	console.debug(
		'h', JSON.stringify(h),
		'm', JSON.stringify(m),
		's', JSON.stringify(s)
	);
	if (
		(h as string).length !== 2
		|| (m as string).length !== 2
	) {
		return false;
	}

	if ((s as string).length > 2) {
		const [justS, subseconds] :string[] = s.split('.')
		s = justS as string;
		if ((subseconds as string).length > MAX_SUBSECONDS) {
			return false;
		}
	}

	if ((s as string).length < 1 || (s as string).length > 2) {
		return false;
	}

	const hours = parseInt(h as string, 10);
	const minutes = parseInt(m as string, 10);
	const seconds = parseInt(s as string, 10);
	console.debug(
		'hours', JSON.stringify(hours),
		'minutes', JSON.stringify(minutes),
		'seconds', JSON.stringify(seconds)
	);

	if (!(isInt(hours) && isInt(minutes) && isInt(seconds))) {
		return false;
	}

	if (
		hours < 0 || hours > 24
		|| minutes < 0 || minutes > 60
		|| seconds < 0 || seconds > 60
	) {
		return false;
	}

	const d = new Date();
	d.setHours(hours);
	d.setMinutes(minutes);
	d.setSeconds(seconds);
	//console.debug('d', JSON.stringify(d));

	//const localeTimeString = d.toLocaleTimeString();
	//console.debug('localeTimeString', JSON.stringify(localeTimeString));

	//const timeString = d.toTimeString();
	//console.debug('timeString', JSON.stringify(timeString));

	return true;*/
}

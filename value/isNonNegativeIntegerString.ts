import {isString} from './isString';


type P = 1|2|3|4|5|6|7|8|9; // Positive Integer (Natural Number)
type D = 0|1|2|3|4|5|6|7|8|9; // Digit / Non-negative Integer (Whole Number)
type ZeroTo99999 = `${D}` // 0-9
	| `${P}${D}` // 10-99
	| `${P}${D}${D}` // 100-999
	| `${P}${D}${D}${D}` // 1000-9999
	| `${P}${D}${D}${D}${D}`; // 10000-99999
	//| `${P}${D}${D}${D}${D}${D}`; // Too complex


export function isNonNegativeIntegerString(
	s :ZeroTo99999 | unknown
) :s is ZeroTo99999 {
	if (
		!isString(s)
		|| !s.length // Don't allow empty string
		|| (s.length > 1 && s.charCodeAt(0) === 48) // Don't allow multiple digits left padded with 0, example 01
	) {
		return false;
	}

	for (let i = s.length - 1; i >= 0; i--) {
    	const d = s.charCodeAt(i);
    	if (d < 48 || d > 57) { return false; }
  	}

	return true;
}

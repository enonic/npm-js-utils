import {isString} from '../value/isString';


export function isAsciiPrintablePunctuation(s :string) {
	if (!isString(s) || s.length === 0) {
		return false;
	}
	for (let i = 0; i < s.length; i++) {
	   const charCode = s.charCodeAt(i);
	   if (
		   charCode < 33 // < EXCLAMATION_MARK
		   || charCode > 126 // > TILDE
		   || (charCode > 47 && charCode < 58) // isAsciiDigit
		   || (charCode > 64 && charCode < 91) // isAsciiLetterCapital
		   || (charCode > 96 && charCode < 123) // isAsciiLetterLowercase
	   ) {
		   return false;
	   }
	}
	return true;
}

import {isInt} from './isInt';
import { isFunction } from './isFunction';

// https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf
// https://www.w3schools.com/js/js_versions.asp
// The in operator was introduced in ES3, so it's safe to use.
export const isInteger = ('isInteger' in Number) && isFunction(Number.isInteger)
	? Number.isInteger
	: isInt;

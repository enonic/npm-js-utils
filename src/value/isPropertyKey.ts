import {isNumber} from './isNumber';
import {isString} from './isString';
import {isSymbol} from './isSymbol';


export const isPropertyKey = (value :PropertyKey|unknown) :value is PropertyKey =>
	isString(value) || isNumber(value) || isSymbol(value);

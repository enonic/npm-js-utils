/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
let literalString = 'This is a literal string';
let stringObject  = new String('String created with constructor');

literalString instanceof String;  // false, string primitive is not a String
stringObject  instanceof String;  // true

literalString instanceof Object;  // false, string primitive is not an Object
stringObject  instanceof Object;  // true

stringObject  instanceof Date;    // false
*/
import {isStringLiteral} from './isStringLiteral';
import {isStringObject} from './isStringObject';


//eslint-disable-next-line @typescript-eslint/ban-types
export const isString = (value: string | unknown) :value is string|String =>
	isStringLiteral(value) || isStringObject(value);

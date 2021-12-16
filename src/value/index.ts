export {isDate} from './isDate';
export {isDateString} from './isDateString';
export {isGeoPoint} from './isGeoPoint';
export {isGeoPointArray} from './isGeoPointArray';
export {isGeoPointString} from './isGeoPointString';
export {isInt} from './isInt';
export {isNumber} from './isNumber';
export {isString} from './isString';
export {isTime} from './isTime';


export function isBoolean(value :unknown) :boolean {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Boolean';
}


export function isFalse(value :unknown): boolean {
	return value === false;
}


export function isFunction(value: unknown) :boolean {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Function';
	/* // Highly performant (but unsafe?)
	return !!(
		value
		&& (value as object).constructor // Function inherits Object.prototype.constructor
		&& (value as () => unknown).call // Function.prototype.call()
		&& (value as () => unknown).apply // Function.prototype.apply()
	); */
}


export function isInfinity(value :unknown) :boolean {
	return typeof value === 'number' && !isFinite(value);
}


export function isNotFalse(value :unknown): boolean {
	return value !== false;
}


export const isNotSet = (value: unknown): boolean =>
	value === null || typeof value === 'undefined';


export function isNotTrue(value :unknown): boolean {
	return value !== true;
}


export function isNull(value: unknown): boolean {
	return value === null;
}


export const isObject = (value: unknown): boolean =>
	Object.prototype.toString.call(value).slice(8,-1) === 'Object';


export function isSet(value: unknown): boolean {
	if (typeof value === 'boolean') { return true; } // If value is true/false it is set
	return value !== null && typeof value !== 'undefined';
}


export function isTrue(value :unknown): boolean {
	return value === true;
}

export function isUndefined(value: unknown): boolean {
	return typeof value === 'undefined';
}


/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

replacer | Optional | A function that alters the behavior of the stringification
process, or an array of String and Number that serve as an allowlist for
selecting/filtering the properties of the value object to be included in the
JSON string. If this value is null or not provided, all properties of the object
are included in the resulting JSON string.
*/
type ReplacerFn = (this: unknown, key: string, value: unknown) => unknown;
//type Replacer =  ReplacerFn|Array<string|number>|undefined
type Replacer =  ReplacerFn|undefined

export function toStr(
	value: unknown,
	replacer? :Replacer,
	space: string | number | undefined = 4
): string {
	return JSON.stringify(value, replacer, space);
}

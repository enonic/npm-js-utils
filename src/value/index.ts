export function isFunction(value: any): boolean {
	return !!(value && value.constructor && value.call && value.apply); // highly performant
}


export function isInt(value: unknown): boolean {
  return typeof value === 'number' &&
    isFinite(value) && // TODO Is isFinite() available in Enonic XP?
    Math.floor(value) === value;
};
/* Alternative implementation, but type complaints {
	return !isNaN(value as number)
		&& parseInt(Number(value as any), 10) === value
		&& !isNaN(parseInt(value, 10));
}*/


export const isNotSet = (value: unknown): boolean =>
	value === null || typeof value === 'undefined';


export const isObject = (value: unknown): boolean =>
	Object.prototype.toString.call(value).slice(8,-1) === 'Object';


export function isSet(value: unknown): boolean {
	if (typeof value === 'boolean') { return true; } // If value is true/false it is set
	return value !== null && typeof value !== 'undefined';
}


export const isString = (value: unknown): boolean =>
	typeof value === 'string' || value instanceof String;


export function toStr(
	value: unknown,
	replacer: (key: string, value: any) => any = null,
	space: string | number = 4
): string {
	return JSON.stringify(value, replacer, space);
}

import {isString} from './isString';


const REGEXP = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;


export function isUuidV4String(value: unknown): value is string {
	return isString(value) ? REGEXP.test(value as string) : false;
}

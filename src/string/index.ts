import {
	isFunction,
	isString
} from '../value/';
export {fold} from './fold';
export {unStem} from './unStem';

export const camelize = (
	str: string,
	removeRegex: RegExp = /\s+/g
): string =>
	str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
		return index === 0 ? word.toLowerCase() : word.toUpperCase();
	}).replace(removeRegex, '');


export function lpad(
	u: unknown,
	w: number = 2,
	z: string = ' '
): string {
  const s:string = '' + u; // Cast to string
  return s.length >= w
  	? s
	: new Array(w - s.length + 1).join(z) + s;
}


export function rpad(
	u: unknown,
	w: number = 2,
	z: string = ' '
): string {
	const s:string = '' + u; // Cast to string
	return s.length >= w
		? s
		: s + new Array(w - s.length + 1).join(z);
}


export function ucFirst(string: string): string {
	if(!isString(string) || !isFunction(string.charAt)) {
		return string;
	}
	return `${
		string.charAt(0).toUpperCase()
	}${
		string.substring(1, string.length)
	}`
}

import {isFunction} from '../value/isFunction';
import {isString} from '../value/isString';


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

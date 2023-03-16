import {isString} from '../value/isString';
import endsWith from './endsWith';
import { startsWith } from './startsWith';


export function cleanAnyDoubleQuoteWrap<Value/* extends unknown*/>(
	val: Value,
	label: string = ''
): string | Value {
	if (isString(val)) {
		if (startsWith(val as string, '"')) {
			if (!endsWith(val as string, '"')) {
				throw new Error(
					`Inconsistent double-quote-wrapping on '${label}' value: ${JSON.stringify(
						val
					)}`
				);
			}
			return val.substring(1, val.length - 1);
		}
		if (endsWith(val as string, '"')) {
			throw new Error(
				`Inconsistent double-quote-wrapping on '${label}' value: ${JSON.stringify(
					val
				)}`
			);
		}
	}
	return val;
}

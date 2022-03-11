import {isString} from '../value/isString';


export function cleanAnyDoubleQuoteWrap<Value extends unknown>(
	val :Value,
	label :string = ''
) :Value {
	if (isString(val)) {
		if (val.startsWith('"')) {
			if (!val.endsWith('"')) {
				throw Error(
					`Inconsistent double-quote-wrapping on '${label}' value: ${JSON.stringify(
						val
					)}`
				);
			}
			return val.substring(1, val.length - 1) as Value;
		}
		if (val.endsWith('"')) {
			throw Error(
				`Inconsistent double-quote-wrapping on '${label}' value: ${JSON.stringify(
					val
				)}`
			);
		}
	}
	return val;
}

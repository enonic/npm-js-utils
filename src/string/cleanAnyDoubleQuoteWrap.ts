import {isString} from '../value/isString';


export function cleanAnyDoubleQuoteWrap<Value/* extends unknown*/>(
	val :Value,
	label :string = ''
) :string|Value {
	if (isString(val)) {
		if (val.startsWith('"')) {
			if (!val.endsWith('"')) {
				throw new Error(
					`Inconsistent double-quote-wrapping on '${label}' value: ${JSON.stringify(
						val
					)}`
				);
			}
			return val.substring(1, val.length - 1);
		}
		if (val.endsWith('"')) {
			throw new Error(
				`Inconsistent double-quote-wrapping on '${label}' value: ${JSON.stringify(
					val
				)}`
			);
		}
	}
	return val;
}

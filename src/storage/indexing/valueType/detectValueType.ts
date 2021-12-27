import type {ValueType} from './ValueType';
import {
	VALUE_TYPE_ANY,
	VALUE_TYPE_BOOLEAN,
	VALUE_TYPE_DOUBLE,
	VALUE_TYPE_GEO_POINT,
	VALUE_TYPE_INSTANT,
	VALUE_TYPE_LOCAL_DATE,
	VALUE_TYPE_LOCAL_DATE_TIME,
	VALUE_TYPE_LOCAL_TIME,
	//VALUE_TYPE_LONG,
	VALUE_TYPE_REFERENCE,
	VALUE_TYPE_SET,
	VALUE_TYPE_STRING
} from './constants';
import {
	isBoolean,
	isDate,
	//isFloat, // Not possible for any number where the decimals are 0
	isGeoPointArray,
	isGeoPointString,
	isInstantString,
	//isInteger,
	isLocalDateString,
	isLocalDateTimeString,
	isNumber,
	isObject,
	isString,
	isTimeString,
	isUuidV4String
} from '../../../value'


export function detectValueType(
	value :unknown
//) :Omit<ValueType, 'any'> {
) :ValueType {
	if (isGeoPointArray(value)) { return VALUE_TYPE_GEO_POINT; }

	if (Array.isArray(value)) {
		if (!value.length) {
			return VALUE_TYPE_ANY;
		}
		// In Enonic XP all items in an Array must be of the same type.
		// Therefore it's enough to check only index 0.
		return detectValueType(value[0]); // Recurse
	}

	if (isBoolean(value)) { return VALUE_TYPE_BOOLEAN; }

	// By default Enonic XP stores a Date object as an instant.
	// Can also be casted to:
	// VALUE_TYPE_LOCAL_DATE_TIME, VALUE_TYPE_LOCAL_DATE or VALUE_TYPE_LOCAL_TIME
	if (isDate(value)) { return VALUE_TYPE_INSTANT; }

	/*if(isInteger(value)) {
		//return VALUE_TYPE_LONG; // Any double where the decimals are 0 becomes an integer
		return VALUE_TYPE_DOUBLE; // So this is safer
	}*/
	if(isNumber(value)) { return VALUE_TYPE_DOUBLE; } // This covers integers too.

	if(isObject(value)) { return VALUE_TYPE_SET; }

	if(isString(value)) {
		if (isGeoPointString(value)) { return VALUE_TYPE_GEO_POINT; }
		if (isInstantString(value)) { return VALUE_TYPE_INSTANT; }
		if (isLocalDateString(value)) { return VALUE_TYPE_LOCAL_DATE; }
		if (isLocalDateTimeString(value)) { return VALUE_TYPE_LOCAL_DATE_TIME; }
		if (isTimeString(value)) { return VALUE_TYPE_LOCAL_TIME; }
		if (isUuidV4String(value)) { return VALUE_TYPE_REFERENCE; }
		return VALUE_TYPE_STRING;
	} // !string

	return VALUE_TYPE_ANY;
}

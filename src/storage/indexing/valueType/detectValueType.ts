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
	VALUE_TYPE_STRING,
	VALUE_TYPES
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


type ValueType = typeof VALUE_TYPES[number];


/*
	Any
		<- Set
		<- String
			<- GeoPointString
			<- InstantString
				<- Date
			<- LocalDateString
			<- LocalDateTimeString
			<- TimeString
			<- UuidV4String
			<- Boolean
			<- Double
				<- GeoPointArray
*/
export function detectCommonValueType(array :Array<unknown>) :ValueType {
	//console.debug('array', array);

	let anyStringCount = 0;
	//@ts-ignore
	let booleanCount = 0;
	//@ts-ignore
	let dateCount = 0;
	let geoPointArrayCount = 0;
	//@ts-ignore
	let geoPointStringCount = 0;
	//@ts-ignore
	let instantStringCount = 0;
	//@ts-ignore
	let localDateStringCount = 0;
	//@ts-ignore
	let localDateTimeStringCount = 0;
	//@ts-ignore
	let numberCount = 0;
	let objectCount = 0;
	//@ts-ignore
	let stringCount = 0;
	//@ts-ignore
	let timeStringCount = 0;
	//@ts-ignore
	let uuidV4StringCount = 0;

	let commonValueType :ValueType|undefined;
	for (let i = 0; i < array.length; i++) {
	    const value = array[i];
		//console.debug('value', value);
		if (isGeoPointArray(value)) {
			//console.debug('isGeoPointArray === true value', value);
			if (!commonValueType) {
				commonValueType = VALUE_TYPE_GEO_POINT;
			//} else if (commonValueType === VALUE_TYPE_SET) {
			} else if (objectCount) {
				return VALUE_TYPE_ANY;
			} else if (commonValueType === VALUE_TYPE_DOUBLE || commonValueType === VALUE_TYPE_GEO_POINT) {
				// Leave it as is
			} else if (anyStringCount) {
				commonValueType = VALUE_TYPE_STRING;
			}
			geoPointArrayCount++;
		} else if (Array.isArray(value)) {
			//console.debug('isArray === true value', value);
			throw new Error("TODO: Enonic XP doesn't support Matrixes!");
			/*if (!value.length) {
				return VALUE_TYPE_ANY;
			}*/
			//commonValueType = detectCommonValueType(value); // Recurse
		} else if (isBoolean(value)) {
			//console.debug('isBoolean === true value', value);
			if (!commonValueType || commonValueType === VALUE_TYPE_BOOLEAN) {
				commonValueType = VALUE_TYPE_BOOLEAN
			} else if (objectCount) {
				return VALUE_TYPE_ANY;
			} else if (anyStringCount) {
				commonValueType = VALUE_TYPE_STRING;
			}
			booleanCount++;
		} else if (isDate(value)) {
			//console.debug('isDate === true value', value);
			if (!commonValueType || commonValueType === VALUE_TYPE_INSTANT) {
				commonValueType = VALUE_TYPE_INSTANT
			} else if (objectCount) {
				return VALUE_TYPE_ANY;
			} else if (anyStringCount) {
				commonValueType = VALUE_TYPE_STRING;
			}
			dateCount++;
		} else if(isNumber(value)) {
			//console.debug('isNumber === true value', value);
			if (!commonValueType) {
				commonValueType = VALUE_TYPE_DOUBLE
			} else if (objectCount) {
				return VALUE_TYPE_ANY;
			} else if (commonValueType === VALUE_TYPE_DOUBLE) {
				// Leave as is
			} else if (anyStringCount) {
				commonValueType = VALUE_TYPE_STRING;
			} else if (geoPointArrayCount) {
				commonValueType = VALUE_TYPE_DOUBLE
			}
			numberCount++;
		} else if(isObject(value)) {
			//console.debug('isObject === true value', value);
			if (!commonValueType || commonValueType === VALUE_TYPE_SET) {
				commonValueType = VALUE_TYPE_SET
			} else /*if (commonValueType !== VALUE_TYPE_SET)*/ { // No-overlap
				return VALUE_TYPE_ANY;
			}
			objectCount++;
		} else if(isString(value)) {
			//console.debug('isString === true value', value);
			if (isGeoPointString(value)) {
				//console.debug('isGeoPointString === true value', value);
				if (!commonValueType || commonValueType === VALUE_TYPE_GEO_POINT) {
					commonValueType = VALUE_TYPE_GEO_POINT;
				} else if (anyStringCount) {
					commonValueType = VALUE_TYPE_STRING;
				}
				geoPointStringCount++;
			} else if (isInstantString(value)) {
				//console.debug('isInstantString === true value', value);
				if (!commonValueType || commonValueType === VALUE_TYPE_INSTANT) {
					commonValueType = VALUE_TYPE_INSTANT;
				} else if (anyStringCount) {
					commonValueType = VALUE_TYPE_STRING;
				}
				instantStringCount++;
			} else if (isLocalDateString(value)) {
				//console.debug('isLocalDateString === true value', value);
				if (!commonValueType || commonValueType === VALUE_TYPE_LOCAL_DATE) {
					commonValueType = VALUE_TYPE_LOCAL_DATE;
				} else if (anyStringCount) {
					commonValueType = VALUE_TYPE_STRING;
				}
				localDateStringCount++;
			} else if (isLocalDateTimeString(value)) {
				//console.debug('isLocalDateTimeString === true value', value);
				if (!commonValueType || commonValueType === VALUE_TYPE_LOCAL_DATE_TIME) {
					commonValueType = VALUE_TYPE_LOCAL_DATE_TIME;
				} else if (anyStringCount) {
					commonValueType = VALUE_TYPE_STRING;
				}
				localDateTimeStringCount++;
			} else if (isTimeString(value)) {
				//console.debug('isTimeString === true value', value);
				if (!commonValueType || commonValueType === VALUE_TYPE_LOCAL_TIME) {
					commonValueType = VALUE_TYPE_LOCAL_TIME;
				} else if (anyStringCount) {
					commonValueType = VALUE_TYPE_STRING;
				}
				timeStringCount++;
			} else if (isUuidV4String(value)) {
				//console.debug('isUuidV4String === true value', value);
				if (!commonValueType || commonValueType === VALUE_TYPE_REFERENCE) {
					commonValueType = VALUE_TYPE_REFERENCE;
				} else if (anyStringCount) {
					commonValueType = VALUE_TYPE_STRING;
				}
				uuidV4StringCount++;
			} else {
				//console.debug('isString === true value', value);
				commonValueType = VALUE_TYPE_STRING;
				stringCount++;
			}
			anyStringCount++;
		} else {
			return VALUE_TYPE_ANY;
		}
		//console.debug('commonValueType', commonValueType, 'value', value);
	} // for
	/*console.debug({
		anyStringCount,
		booleanCount,
		commonValueType,
		dateCount,
		geoPointArrayCount,
		geoPointStringCount,
		instantStringCount,
		localDateStringCount,
		localDateTimeStringCount,
		numberCount,
		objectCount,
		stringCount,
		timeStringCount,
		uuidV4StringCount
	});*/
	return commonValueType as ValueType;
}


export function detectValueType(
	value :unknown
//) :Omit<ValueType, 'any'> {
) :ValueType {
	if (isGeoPointArray(value)) { return VALUE_TYPE_GEO_POINT; }

	if (Array.isArray(value)) {
		if (!value.length) {
			return VALUE_TYPE_ANY;
		}
		return detectCommonValueType(value);
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

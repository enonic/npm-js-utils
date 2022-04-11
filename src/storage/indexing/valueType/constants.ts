export const VALUE_TYPE_ANY = 'any';
export const VALUE_TYPE_BOOLEAN = 'boolean';
export const VALUE_TYPE_DOUBLE = 'double';
export const VALUE_TYPE_GEO_POINT = 'geoPoint';
export const VALUE_TYPE_INSTANT = 'instant';
export const VALUE_TYPE_LOCAL_DATE = 'localDate';
export const VALUE_TYPE_LOCAL_DATE_TIME = 'localDateTime';
export const VALUE_TYPE_LOCAL_TIME = 'localTime';
export const VALUE_TYPE_LONG = 'long';
export const VALUE_TYPE_REFERENCE = 'reference';
export const VALUE_TYPE_SET = 'set';
export const VALUE_TYPE_STRING = 'string';

export const VALUE_TYPES = [
	VALUE_TYPE_ANY,
	VALUE_TYPE_BOOLEAN,
	VALUE_TYPE_DOUBLE,
	VALUE_TYPE_GEO_POINT,
	VALUE_TYPE_INSTANT,
	VALUE_TYPE_LOCAL_DATE,
	VALUE_TYPE_LOCAL_DATE_TIME,
	VALUE_TYPE_LOCAL_TIME,
	VALUE_TYPE_LONG,
	VALUE_TYPE_REFERENCE,
	VALUE_TYPE_SET,
	VALUE_TYPE_STRING
] as const;

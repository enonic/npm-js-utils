export const VALUE_TYPE_ANY:string = 'any';
export const VALUE_TYPE_BOOLEAN:string = 'boolean';
export const VALUE_TYPE_DOUBLE:string = 'double';
export const VALUE_TYPE_GEO_POINT:string = 'geoPoint';
export const VALUE_TYPE_INSTANT:string = 'instant';
export const VALUE_TYPE_LOCAL_DATE:string = 'localDate';
export const VALUE_TYPE_LOCAL_DATE_TIME:string = 'localDateTime';
export const VALUE_TYPE_LOCAL_TIME:string = 'localTime';
export const VALUE_TYPE_LONG:string = 'long';
export const VALUE_TYPE_REFERENCE:string = 'reference';
export const VALUE_TYPE_SET:string = 'set';
export const VALUE_TYPE_STRING:string = 'string';

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

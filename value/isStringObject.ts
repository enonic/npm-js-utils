export const isStringObject = (value: string | unknown): value is String =>
	value instanceof String;

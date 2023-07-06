//eslint-disable-next-line @typescript-eslint/ban-types
export const isStringObject = (value: string | unknown): value is String =>
	value instanceof String;

export const isString = (value: unknown): boolean =>
	typeof value === 'string' || value instanceof String;

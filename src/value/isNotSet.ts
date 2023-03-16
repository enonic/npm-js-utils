export const isNotSet = (value: unknown): boolean =>
	value === null || typeof value === 'undefined';

export function isInt(value: unknown): boolean {
	return typeof value === 'number' &&
		isFinite(value as number) && // TODO Is isFinite() available in Enonic XP?
		Math.floor(value as number) === value;
}
/* Alternative implementation, but type complaints {
	return !isNaN(value as number)
		&& parseInt(Number(value as any), 10) === value
		&& !isNaN(parseInt(value, 10));
}*/

// core-js/internals/is-integral-number.js
//return !isObject(it) && isFinite(it) && Math.floor(it) === it;

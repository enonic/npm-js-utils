export function isInt(value: unknown): boolean {
	return typeof value === 'number' &&
		isFinite(value) && // TODO Is isFinite() available in Enonic XP?
		Math.floor(value) === value;
}
/* Alternative implementation, but type complaints {
	return !isNaN(value as number)
		&& parseInt(Number(value as any), 10) === value
		&& !isNaN(parseInt(value, 10));
}*/

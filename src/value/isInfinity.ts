export function isInfinity(value :unknown) :boolean {
	return typeof value === 'number' && !isFinite(value);
}

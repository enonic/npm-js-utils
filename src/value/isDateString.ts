export function isDateString(value :unknown) :boolean {
	return typeof value === 'string' && !isNaN(Date.parse(value));
}

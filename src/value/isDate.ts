export function isDate(value :unknown) :boolean {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Date';
}

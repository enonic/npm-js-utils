export function isDate(value :unknown) :value is Date {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Date';
}

export function isBoolean(value :unknown) :value is boolean {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Boolean';
}

export function isBoolean(value :unknown) :boolean {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Boolean';
}

export function isFunction(value: unknown) :boolean {
	return Object.prototype.toString.call(value).slice(8,-1) === 'Function';
	/* // Highly performant (but unsafe?)
	return !!(
		value
		&& (value as object).constructor // Function inherits Object.prototype.constructor
		&& (value as () => unknown).call // Function.prototype.call()
		&& (value as () => unknown).apply // Function.prototype.apply()
	); */
}

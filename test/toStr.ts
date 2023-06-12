import {
	isInfinity,
	isNumber
} from '../index';


// @ts-expect-error TS2339: Property 'toJSON' does not exist on type 'BigInt'.
BigInt.prototype.toJSON = function () {
	return `BigInt(${this.toString()})`;
};


export function toStr(v :unknown) {
	if (isInfinity(v)) {
		return v;
	}
	if(isNumber(v) && (v < -9 || v > 9)) {
		return v.toExponential();
	}
	return JSON.stringify(v);
}

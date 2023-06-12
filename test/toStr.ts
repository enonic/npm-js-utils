import {
	isInfinity,
	isNumber
} from '../index';


export function toStr(v :unknown) {
	if (isInfinity(v)) {
		return v;
	}
	if(isNumber(v) && (v < -9 || v > 9)) {
		return v.toExponential();
	}
	return JSON.stringify(v);
}

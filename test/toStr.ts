import {
	isInfinity,
	isNumber
//} from '@enonic/js-utils';
} from '../src';
//} from '../src/index.js';


export function toStr(v) {
	if (isInfinity(v)) {
		return v;
	}
	if(isNumber(v) && (v < -9 || v > 9)) {
		return v.toExponential();
	}
	return JSON.stringify(v);
}

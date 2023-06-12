import {deepStrictEqual} from 'assert';
import {
	isInfinity,
	isNumber
} from '../../index';


const NUMBERS = [
	1e5, // 1e5 === 100000 :(
	1.1,
	1,
	0.1,

	// 0.0 === 0 === -0 === -0.0 :(
	0.0,
	0,
	-0,
	-0.0,

	-0.1,
	-1,
	-1.1,
	-1e5, // -1100000
];

const NOT_NUMBERS = [
	'1e5',
	'1.1',
	'1',
	'0.1',
	'0.0',
	'0',
	'-0',
	'-0.0',
	'-0.1',
	'-1',
	'-1.1',
	'-1e5',
	NaN,
	Infinity,
	-Infinity,
	true,
	false,
	{},
	[]
];


function toStr(v) {
	if (isInfinity(v)) {
		return v;
	}
	if(isNumber(v) && (v < -9 || v > 9)) {
		return v.toExponential();
	}
	return JSON.stringify(v, null, 4);
}


describe('isNumber', () => {
	NUMBERS.forEach((num) => {
		it(`isNumber(${toStr(num)}) is true`, () => {
			deepStrictEqual(true,isNumber(num))
		});
	});
	NOT_NUMBERS.forEach((v) => {
		it(`isNumber(${toStr(v)}) is false`, () => {
			deepStrictEqual(false,isNumber(v))
		});
	});
});

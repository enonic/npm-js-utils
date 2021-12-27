import {deepStrictEqual} from 'assert';
import {
	isFunction,
	isInfinity,
	isNumber
} from '../../src';

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

const NOT_FUNCTIONS = NUMBERS.concat([
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
]);


function toStr(v) {
	if (isInfinity(v)) {
		return v;
	}
	if(isNumber(v) && (v < -9 || v > 9)) {
		return v.toExponential();
	}
	return JSON.stringify(v, null, 4);
}


describe('value', () => {
	describe('isFunction --> true', () => {
		it('isFunction(()=>{/**/}) --> true', () => {
			deepStrictEqual(
				true,
				isFunction(()=>{/**/})
			);
		});
		it('isFunction(function(){/**/}) --> true', () => {
			deepStrictEqual(
				true,
				isFunction(function(){/**/})
			);
		});
		it('isFunction(toStr) --> true', () => {
			deepStrictEqual(
				true,
				isFunction(toStr)
			);
		});
	});
	describe('isFunction --> false', () => {
		NOT_FUNCTIONS.forEach((value) => {
			it(`isFunction(${toStr(value)}) --> false`, () => {
				deepStrictEqual(
					false,
					isFunction(value)
				);
			});
		});
	});
});

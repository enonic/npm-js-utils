import {deepStrictEqual} from 'assert';
import {isFunction} from '@enonic/js-utils';
import {toStr} from '../toStr';


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


const NOT_FUNCTIONS = [].concat(
	NUMBERS,
	[
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
	]
);


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

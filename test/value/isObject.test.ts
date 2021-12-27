import {deepStrictEqual} from 'assert';
import {isObject} from '../../src';
import {toStr} from '../toStr';


const TESTS_TRUE = [
	{},
	{ key: 'property' }
];

const TESTS_FALSE = [
	undefined,
	null,
	'',
	'string',
	true,
	false,
	[],
	//{},
	-Infinity,
	-1,
	-0.1,
	-0.0,
	0,
	0.0,
	0.1,
	1,
	Infinity,
	new Date(),
	() => {/**/},
	NaN
];


describe('value', () => {
	describe('isObject()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isObject(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				it(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isObject(params)
					);
				});
			});
		});
	});
});

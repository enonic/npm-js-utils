import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isObject } from '../../index';
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
	[], // Yes our isObject type guard considers Array not to be object
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
				test(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isObject(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				test(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isObject(params)
					);
				});
			});
		});
	});
});

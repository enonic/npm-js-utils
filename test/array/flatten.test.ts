import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {flatten} from '../../index';


describe('array', () => {
	describe('flatten', () => {
		test("flatten(['a']) --> ['a']", () => {
			deepStrictEqual(
				['a'],
				flatten(['a'])
			)
		});
		test("flatten([['a']]) --> ['a']", () => {
			deepStrictEqual(
				['a'],
				flatten([['a']])
			)
		});
		test("flatten([[['a']]]) --> [['a']]", () => {
			deepStrictEqual(
				[['a']],
				flatten([[['a']]])
			)
		});
		test("flatten([[['a']]],2) --> ['a']", () => {
			deepStrictEqual(
				['a'],
				flatten([[['a']]],2)
			)
		});
		test("flatten([['a'],['b']]) --> ['a','b']", () => {
			deepStrictEqual(
				['a','b'],
				flatten([['a'],['b']])
			)
		});
		test("flatten([['a','b'],['c', 'd']]) --> ['a','b','c','d']", () => {
			deepStrictEqual(
				['a','b','c','d'],
				flatten([['a','b'],['c', 'd']])
			)
		});
	});
});

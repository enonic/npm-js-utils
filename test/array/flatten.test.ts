import {deepStrictEqual} from 'assert';
import {flatten} from '../../src';


describe('array', () => {
	describe('flatten', () => {
		it("flatten(['a']) --> ['a']", () => {
			deepStrictEqual(
				['a'],
				flatten(['a'])
			)
		});
		it("flatten([['a']]) --> ['a']", () => {
			deepStrictEqual(
				['a'],
				flatten([['a']])
			)
		});
		it("flatten([[['a']]]) --> [['a']]", () => {
			deepStrictEqual(
				[['a']],
				flatten([[['a']]])
			)
		});
		it("flatten([[['a']]],2) --> ['a']", () => {
			deepStrictEqual(
				['a'],
				flatten([[['a']]],2)
			)
		});
		it("flatten([['a'],['b']]) --> ['a','b']", () => {
			deepStrictEqual(
				['a','b'],
				flatten([['a'],['b']])
			)
		});
		it("flatten([['a','b'],['c', 'd']]) --> ['a','b','c','d']", () => {
			deepStrictEqual(
				['a','b','c','d'],
				flatten([['a','b'],['c', 'd']])
			)
		});
	});
});

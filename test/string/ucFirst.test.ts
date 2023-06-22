import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { ucFirst } from '../../index';


describe('string', () => {
	describe('ucFirst', () => {
		test("ucFirst('word') --> 'Word'", () => {
			deepStrictEqual('Word',ucFirst('word'))
		});
		test("ucFirst('worD') --> 'WorD'", () => {
			deepStrictEqual('WorD',ucFirst('worD'))
		});
	});
});

import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { cleanAnyDoubleQuoteWrap } from '../../index';


describe('string', () => {
	describe('cleanAnyDoubleQuoteWrap', () => {
		test(`('"wrapped"') --> 'wrapped'`, () => {
			deepStrictEqual(
				'wrapped',
				cleanAnyDoubleQuoteWrap('"wrapped"')
			) // deepStrictEqual
		}); // it
		test(`('unwrapped') --> 'unwrapped'`, () => {
			deepStrictEqual(
				'unwrapped',
				cleanAnyDoubleQuoteWrap('unwrapped')
			) // deepStrictEqual
		}); // it
	}); // describe cleanAnyDoubleQuoteWrap
}); // describe string

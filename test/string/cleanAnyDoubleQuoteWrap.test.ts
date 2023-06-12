import {deepStrictEqual} from 'assert';
import { cleanAnyDoubleQuoteWrap } from '../../index';


describe('string', () => {
	describe('cleanAnyDoubleQuoteWrap', () => {
		it(`('"wrapped"') --> 'wrapped'`, () => {
			deepStrictEqual(
				'wrapped',
				cleanAnyDoubleQuoteWrap('"wrapped"')
			) // deepStrictEqual
		}); // it
		it(`('unwrapped') --> 'unwrapped'`, () => {
			deepStrictEqual(
				'unwrapped',
				cleanAnyDoubleQuoteWrap('unwrapped')
			) // deepStrictEqual
		}); // it
	}); // describe cleanAnyDoubleQuoteWrap
}); // describe string

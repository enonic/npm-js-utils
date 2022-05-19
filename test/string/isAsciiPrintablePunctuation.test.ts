import {
	ASCII_PUNCTUATION
} from '@enonic/test-data';
import {deepStrictEqual} from 'assert';
import {isAsciiPrintablePunctuation} from '../../src';


const TESTS_TRUE = ASCII_PUNCTUATION;


const TESTS_FALSE = [
	'',
	' ', // 32 SPACE
	'0',
	'9',
	'A',
	'Z',
	'a',
	'z',
	'Ç' // 128 Majuscule C-cedilla
];



describe('string', () => {
	describe('isAsciiPrintablePunctuation', () => {
		describe('--> true', () => {
			for (let i = 0; i < TESTS_TRUE.length; i++) {
			    const value = TESTS_TRUE[i];
				it(`${value}`, () => {
					deepStrictEqual(
						true,
						isAsciiPrintablePunctuation(value)
					) // deepStrictEqual
				}); // it
			}
		}); // describe false
		describe('--> false', () => {
			for (let i = 0; i < TESTS_FALSE.length; i++) {
			    const value = TESTS_FALSE[i];
				it(`${value}`, () => {
					deepStrictEqual(
						false,
						isAsciiPrintablePunctuation(value)
					) // deepStrictEqual
				}); // it
			}
		}); // describe false
	}); // describe isAsciiPrintablePunctuation
}); // describe string

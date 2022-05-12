import {deepStrictEqual} from 'assert';
import {NOT_STRINGS} from '@enonic/test-data';
import {isValidGraphQLName} from '../../src';
import {toStr} from '../toStr';


const TESTS_TRUE = [
	'_',
	'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
	'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
	'__0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
];


const TESTS_FALSE = NOT_STRINGS.concat([
	// First char invalid
	'0',
	'9',
	'-',
	'Æ',
	'ø',
	// First char valid, second char invalid
	'_-',
	'_Æ',
	'_ø'
]) as Array<string>; // Not actually string, but in this case, we don't care.


describe('string', () => {
	describe('isValidGraphQLName()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((s) => {
				it(`${toStr(s)}`, () => {
					deepStrictEqual(
						true,
						isValidGraphQLName(s)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((s) => {
				it(`${toStr(s)}`, () => {
					deepStrictEqual(
						false,
						isValidGraphQLName(s)
					);
				});
			});
		});
	});
});

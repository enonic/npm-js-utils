import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isInteger } from '../../index';
import {
	INTEGERS,
	NOT_INTEGERS
} from '@enonic/test-data';
import {toStr} from '../toStr';


describe('value', () => {
	describe('isInteger()', () => {

		describe('--> true', () => {
			for (let i = 0; i < INTEGERS.length; i++) {
				const anInt = INTEGERS[i];
				test(`${toStr(anInt)}`, () => {
					deepStrictEqual(
						true,
						isInteger(anInt)
					);
				}); // it
			} // for
		}); // describe true

		describe('--> false', () => {
			for (let i = 0; i < NOT_INTEGERS.length; i++) {
				const notInt = NOT_INTEGERS[i];
				test(`${toStr(notInt)}`, () => {
					deepStrictEqual(
						false,
						isInteger(notInt)
					);
				}); // it
			} // for
		}); // describe false

	}); // describe isInteger
}); // describe value

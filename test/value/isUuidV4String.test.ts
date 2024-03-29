import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isUuidV4String } from '../../index';
import {
	UUID_V4,
	NOT_UUID_V4
} from '@enonic/test-data';
import {toStr} from '../toStr';


describe('value', () => {
	describe('isUuidV4String()', () => {
		describe('--> true', () => {
			for (let i = 0; i < UUID_V4.length; i++) {
				const param = UUID_V4[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						true,
						isUuidV4String(param)
					);
				});
			}
		}); // describe true

		describe('--> false', () => {
			for (let i = 0; i < NOT_UUID_V4.length; i++) {
				const param = NOT_UUID_V4[i];
				test(`${toStr(param)}`, () => {
					deepStrictEqual(
						false,
						isUuidV4String(param)
					);
				});
			}
		}); // describe false
	}); // describe isUuidV4String
}); // describe value

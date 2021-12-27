import {deepStrictEqual} from 'assert';
import {isUuidV4String} from '../../src';
import {
	UUID_V4,
	NOT_UUID_V4
} from '../testData'
import {toStr} from '../toStr';


describe('value', () => {
	describe('isUuidV4String()', () => {
		describe('--> true', () => {
			for (var i = 0; i < UUID_V4.length; i++) {
				const param = UUID_V4[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						true,
						isUuidV4String(param)
					);
				});
			}
		}); // describe true

		describe('--> false', () => {
			for (var i = 0; i < NOT_UUID_V4.length; i++) {
				const param = NOT_UUID_V4[i];
				it(`${toStr(param)}`, () => {
					deepStrictEqual(
						false,
						isUuidV4String(param)
					);
				});
			}
		}); // describe false
	}); // describe isUuidV4String
}); // describe value
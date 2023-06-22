import { NOT_BOOLEANS } from '@enonic/test-data';
import { equal } from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { toStr } from '../toStr';
import { isTrue } from '../../index';

describe('value', () => {
	describe('isTrue', () => {
		test('returns true when value is true -- true', () => {
			equal(
				isTrue(true),
				true
			)
		});
		[false as unknown].concat(NOT_BOOLEANS).forEach((value) => {
			test(`returns false when value is NOT true -- ${toStr(value)} `, () => {
				equal(
					isTrue(value),
					false
				)
			});
		});
	});
});

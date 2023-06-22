import { NOT_BOOLEANS } from '@enonic/test-data';
import { equal } from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { toStr } from '../toStr';
import { isFalse } from '../../index';

describe('value', () => {
	describe('isFalse', () => {
		test('returns true when value is false -- false', () => {
			equal(
				isFalse(false),
				true
			)
		});
		[true as unknown].concat(NOT_BOOLEANS).forEach((value) => {
			test(`returns false when value is NOT false -- ${toStr(value)} `, () => {
				equal(
					isFalse(value),
					false
				)
			});
		});
	});
});

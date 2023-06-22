import { NOT_UNDEFINED } from '@enonic/test-data';
import { equal } from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { toStr } from '../toStr';
import { isUndefined } from '../../index';

describe('value', () => {
	describe('isUndefined', () => {
		test('returns true when value is undefined -- undefined', () => {
			equal(
				isUndefined(undefined),
				true
			)
		});
		NOT_UNDEFINED.forEach((value) => {
			test(`returns false when value is defined -- ${toStr(value)} `, () => {
				equal(
					isUndefined(value),
					false
				)
			});
		});
	});
});

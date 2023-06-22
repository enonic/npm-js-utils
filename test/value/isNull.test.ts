import { NULL, NOT_NULL } from '@enonic/test-data';
import { equal } from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { toStr } from '../toStr';
import { isNull } from '../../index';


describe('value', () => {
	describe('isNull', () => {
		test('returns true when value is null -- undefined', () => {
			equal(
				isNull(NULL),
				true
			)
		});
		NOT_NULL.forEach((value) => {
			test(`returns false when value is NOT null -- ${toStr(value)} `, () => {
				equal(
					isNull(value),
					false
				)
			});
		});
	});
});

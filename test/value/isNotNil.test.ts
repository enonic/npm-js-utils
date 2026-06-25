import {
	NULL,
	NOT_NULL,
	UNDEFINED,
} from '@enonic/test-data';
import { equal } from 'assert';
import {
	describe,
	test
} from '@jest/globals';
import { isNotNil } from '../../index';
import { toStr } from '../toStr';

const NOT_NIL = NOT_NULL.filter(v => typeof v !== 'undefined');

describe('value', () => {
	describe('isNotNil', () => {
		test('returns false when value is null', () => {
			equal(
				isNotNil(NULL),
				false
			)
		});
		test('returns false when value is undefined', () => {
			equal(
				isNotNil(UNDEFINED),
				false
			)
		});
		NOT_NIL.forEach((value) => {
			test(`returns true when value is NOT null -- ${toStr(value)} `, () => {
				equal(
					isNotNil(value),
					true
				)
			});
		});
	});
});

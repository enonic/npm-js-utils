import {
	BIG_INTS,
	NOT_BIG_INTS
} from '@enonic/test-data';
import { equal } from 'assert';
import { toStr } from '../toStr';
import { isBigInt } from '../../index';

describe('value', () => {
	describe('isBigInt', () => {
		BIG_INTS.forEach((value) => {
			it(`returns true when value is BigInt -- ${toStr(value)}`, () => {
				equal(
					isBigInt(value),
					true
				)
			});
		});
		NOT_BIG_INTS.forEach((value) => {
			it(`returns false when value is NOT BigInt -- ${toStr(value)} `, () => {
				equal(
					isBigInt(value),
					false
				)
			});
		});
	});
});

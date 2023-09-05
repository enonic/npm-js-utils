import {
	describe,
	expect,
	test
} from '@jest/globals';
import { values } from '../../index';


describe('values', () => {
	test('should return an array of values', () => {
		expect(values({ a: 1, b: 2 })).toEqual([1, 2]);
	});
});

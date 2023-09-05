import {
	describe,
	expect,
	test
} from '@jest/globals';
import { entries } from '../../index';


describe('entries', () => {
	test('should return an array of key-value pairs', () => {
		expect(entries({ a: 1, b: 2 })).toEqual([['a', 1], ['b', 2]]);
	});
});

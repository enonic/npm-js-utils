import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { isTimeString } from '../../index';
import {toStr} from '../toStr';


const TESTS_TRUE = [
	'10:15:30',
	'00:00',
	'00:00:00',
	'00:00:00.', // Allowed
	'00:00:00.1',
	'00:00:00.12',
	'00:00:00.123',
	'00:00:00.1234',
	'00:00:00.12345',
	'00:00:00.123456',
	'00:00:00.1234567',
	'00:00:00.12345678',
	'00:00:00.123456789'
];


const TESTS_FALSE = [
	'00:00:00.1234567890',
	'24:00:00',
	'00:60:00',
	'00:00:60',
	'00',
	'00:0',
	'00:00:',
	'00:00:0',
	'0',
	'0:',
	'0:0',
	'0:0:',
	'0:0:0',
	'0:0:0.',
	'0:0:0.1',
	'0:0:0.12',
	'0:0:0.123',
	'0:0:0.1234',
	'0:0:0.12345',
	'0:0:0.123456',
	'0:0:0.1234567',
	'0:0:0.12345678',
	'0:0:0.123456789',
	'-1',
	'25',
	'0:-1',
	'0:61',
	'0:0:-1',
	'0:0:61',
	// Date related, but not an actual Date object
	'2011-12-03T10:15:30Z',
	new Date(),
	new Date().toDateString(),

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString
	// Just an alias to toUTCString
	// For some reason TypeScript doesn't include typings for it
	// new Date().toGMTString(),

	new Date().toJSON(),
	new Date().toLocaleDateString(),
	new Date().toLocaleString(),
	new Date().toLocaleTimeString(),
	new Date().toISOString(),
	//new Date().toSource(), // Deprecated
	new Date().toString(),
	new Date().toTimeString(),
	new Date().toUTCString(),
	Date.now(),
	Date.parse('2011-12-03T10:15:30Z'),
	Date.UTC(2023, 3),
	// Invalid input
	'',
	'a',
	true,
	false,
	[],
	{},
	-1,
	1,
	-Infinity,
	Infinity
];


describe('value', () => {
	describe('isTimeString()', () => {
		describe('--> true', () => {
			TESTS_TRUE.forEach((params) => {
				test(`${toStr(params)}`, () => {
					deepStrictEqual(
						true,
						isTimeString(params)
					);
				});
			});
		});
		describe('--> false', () => {
			TESTS_FALSE.forEach((params) => {
				test(`${toStr(params)}`, () => {
					deepStrictEqual(
						false,
						isTimeString(params)
					);
				});
			});
		});
	});
});

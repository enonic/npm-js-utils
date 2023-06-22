import {equal, ok} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { hasOwnProperty } from '../../index';


describe('hasOwnProperty', () => {
	const value = undefined;
	test('works for string', () => {
		equal(false, hasOwnProperty({}, 'string'));
		ok(hasOwnProperty({ string: value }, 'string'));
	});
	test('works for whitespace', () => {
		equal(false, hasOwnProperty({}, ' '));
		ok(hasOwnProperty({ ' ': value }, ' '));
	});
	test('works for number', () => {
		equal(false, hasOwnProperty({}, 0));
		ok(hasOwnProperty({ 0: value }, 0));
	});
	test('works for symbol', () => {
		const symbol = Symbol('foo');
		equal(false, hasOwnProperty({}, symbol));
		ok(hasOwnProperty({ [symbol]: value }, symbol));
	});
}); // describe hasOwnProperty

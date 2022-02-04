import {equal, ok} from 'assert';
import { hasOwnProperty } from '../../src';


describe('hasOwnProperty', () => {
	const value = undefined;
	it('works for string', () => {
		equal(false, hasOwnProperty({}, 'string'));
		ok(hasOwnProperty({ string: value }, 'string'));
	});
	it('works for whitespace', () => {
		equal(false, hasOwnProperty({}, ' '));
		ok(hasOwnProperty({ ' ': value }, ' '));
	});
	it('works for number', () => {
		equal(false, hasOwnProperty({}, 0));
		ok(hasOwnProperty({ 0: value }, 0));
	});
	it('works for symbol', () => {
		const symbol = Symbol('foo');
		equal(false, hasOwnProperty({}, symbol));
		ok(hasOwnProperty({ [symbol]: value }, symbol));
	});
}); // describe hasOwnProperty

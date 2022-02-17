import {deepStrictEqual} from 'assert';
import {string} from '../../src';
const {includes} = string;

describe('string', () => {
	describe('includes', () => {
		it("'', 'a' --> false", () => {
			deepStrictEqual(
				false,
				includes('', 'a')
			)
		});
		it("'abc', 'a' --> true", () => {
			deepStrictEqual(
				true,
				includes('abc', 'a')
			)
		});
		it("'abc', 'b' --> true", () => {
			deepStrictEqual(
				true,
				includes('abc', 'b')
			)
		});
		it("'abc', 'c' --> true", () => {
			deepStrictEqual(
				true,
				includes('abc', 'c')
			)
		});
		it("'abc', 'd' --> false", () => {
			deepStrictEqual(
				false,
				includes('abc', 'd')
			)
		});
	});
});

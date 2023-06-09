import {deepStrictEqual} from 'assert';
import {arrayIncludes as includes} from '../../index';

describe('array', () => {
	describe('includes', () => {
		it("[], 'a' --> false", () => {
			deepStrictEqual(
				false,
				includes([], 'a')
			)
		});
		it("['a', 'b', 'c'], 'a' --> true", () => {
			deepStrictEqual(
				true,
				includes(['a', 'b', 'c'], 'a')
			)
		});
		it("['a', 'b', 'c'], 'b' --> true", () => {
			deepStrictEqual(
				true,
				includes(['a', 'b', 'c'], 'b')
			)
		});
		it("['a', 'b', 'c'], 'd' --> false", () => {
			deepStrictEqual(
				false,
				includes(['a', 'b', 'c'], 'd')
			)
		});
	});
});

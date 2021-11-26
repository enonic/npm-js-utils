import {deepStrictEqual} from 'assert';
import {sortKeys} from '../../dist/esm/index.mjs';

const {keys} = Object;

const a = '1';
const b = '2';

describe('sortKeys', () => {
	describe('object', () => {
		it('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b
				},
				sortKeys({b,a})
			);
		});
		it('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(sortKeys({b,a}))
			);
		});
	});

	describe('nested object', () => {
		const res = sortKeys({
			c: {
				b,
				a
			},
			b,
			a
		});
		it('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b,
					c: {
						a,
						b
					}
				},
				res
			);
		});
		it('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b', 'c'],
				keys(res)
			);
		});
		it('nested keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(res.c)
			);
		});
	});

	describe('nested object inside an array', () => {
		const res = sortKeys([{
			c: {
				b,
				a
			},
			b,
			a
		}]);
		it('array is deepStrictEqual', () => {
			deepStrictEqual(
				[{
					a,
					b,
					c: {
						a,
						b
					}
				}],
				res
			);
		});
		it('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b', 'c'],
				keys(res[0])
			);
		});
		it('nested keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(res[0].c)
			);
		});
	});
	describe('leaves non objects alone', () => {
		it('boolean false', () => {
			deepStrictEqual(
				false,
				sortKeys(false)
			);
		});
		it('boolean true', () => {
			deepStrictEqual(
				true,
				sortKeys(true)
			);
		});
		it('null', () => {
			deepStrictEqual(
				null,
				sortKeys(null)
			);
		});
	});
});

import {deepStrictEqual} from 'assert';
import {sortKeysRec} from '@enonic/js-utils';

const {keys} = Object;

const a = '1';
const b = '2';

describe('sortKeysRec', () => {
	describe('object', () => {
		it('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b
				},
				sortKeysRec({b,a})
			);
		});
		it('keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(sortKeysRec({b,a}))
			);
		});
	});

	describe('nested object', () => {
		const res = sortKeysRec({
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
		const res = sortKeysRec([{
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
				sortKeysRec(false)
			);
		});
		it('boolean true', () => {
			deepStrictEqual(
				true,
				sortKeysRec(true)
			);
		});
		it('null', () => {
			deepStrictEqual(
				null,
				sortKeysRec(null)
			);
		});
	});
});

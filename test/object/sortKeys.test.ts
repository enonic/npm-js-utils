import {deepStrictEqual} from 'assert';
import { sortKeys } from '../../index';


const {keys} = Object;

const a = '1';
const b = '2';


describe('sortKeys', () => {
	describe('object', () => {
		const res = sortKeys({
			b,
			a
		});
		it('object is deepStrictEqual', () => {
			deepStrictEqual(
				{
					a,
					b
				},
				res
			);
		});
		it('object keys are sorted', () => {
			deepStrictEqual(
				['a', 'b'],
				keys(res)
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
		it('nested keys are NOT sorted', () => {
			deepStrictEqual(
				['b', 'a'],
				keys(res.c)
			);
		});
	});
});

import {assert} from 'chai';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { deleteIn } from '../../index';

const {
	equal,
	deepStrictEqual
} = assert;

describe('object', () => {
	describe('deleteIn', () => {

		test('returns undefined when any param is missing or false', () => {
			// @ts-expect-error Expected 2 arguments, but got 0.ts(2554)
			equal(deleteIn(), undefined);
			equal(deleteIn({}), undefined);
			equal(deleteIn({}, ''), undefined);
			equal(deleteIn({}, []), undefined);
			equal(deleteIn({}, ['']), undefined);
		}); // it returns undefined when any param is missing or false

		test('deletes rest path', () => {
			const obj = {
				one: {
					two: {
						three: 'three'
					}
				}
			}
			equal(deleteIn(obj, 'one', 'two', 'three'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {one: {two: {}}});
			equal(deleteIn(obj, 'one', 'two'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {one: {}});
			equal(deleteIn(obj, 'one'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {});
		}); // it deletes array path

		test('deletes string path', () => {
			const obj = {
				one: {
					two: {
						three: 'three'
					}
				}
			}
			equal(deleteIn(obj, 'one.two.three'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {one: {two: {}}});
			equal(deleteIn(obj, 'one.two'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {one: {}});
			equal(deleteIn(obj, 'one'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {});
		}); // it deletes array path

		test('deletes array path', () => {
			const obj = {
				one: {
					two: {
						three: 'three'
					}
				}
			}
			equal(deleteIn(obj, ['one', 'two', 'three']), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {one: {two: {}}});
			equal(deleteIn(obj, ['one', 'two']), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {one: {}});
			equal(deleteIn(obj, ['one']), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {});
		}); // it deletes array path

		test('handles number and symbol path', () => {
			const sym2 = Symbol("key");
			const obj = {
				1: {
					[sym2]: {
						three: 'three'
					}
				}
			}
			equal(deleteIn(obj, 1, sym2, 'three'), undefined);
			// @ts-expect-error ts(2741)
			deepStrictEqual(obj, {1: {[sym2]: {}}});
		}); // it deletes array path

		test('does not traverse undefined', () => {
			const obj = {
				one: undefined
			}
			equal(deleteIn(obj, ['one', 'two']), undefined);
			deepStrictEqual(obj, {one: undefined});
		}); // it does not traverse undefined

		test('handles circular objects', () => {
			const circularObj = {
				one: {}
			}
			// @ts-expect-error TS2339
			circularObj.myself = circularObj;
			equal(deleteIn(circularObj, 'myself', 'myself', 'myself', 'myself', 'myself', 'one'), undefined);
			deepStrictEqual(circularObj, {
				// @ts-expect-error TS2345
				myself: circularObj,
			});
			// console.info('circularObj: %s', circularObj);
		});

	}); // describe deleteIn
}); // describe object

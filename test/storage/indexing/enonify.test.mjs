import {deepStrictEqual} from 'assert';
import {enonify} from '../../../dist/esm/index.mjs';

describe('enonify', () => {
	it('Handles nesting', () => {
		deepStrictEqual(
			{nested:{
				false: false,
				true: true,
				0: 0,
				minus0: -0,
				string0: '0',
				flatten: [false, 0, 'a']
			}},
			enonify({
				nested: {
					// No change
					false: false,
					true: true,
					0: 0,
					minus0: -0,
					string0: '0',
					// Delete
					nan: NaN,
					null: null,
					undefined: undefined,
					// Flatten
					flatten: [false, [0], 'a']
				}
			})
		)
	})

	it('Deletes a property with the value null from an object', () => {
		deepStrictEqual(
			{},
			enonify({prop: null})
		)
	})

	it('Deletes a property with the value undefined from an object', () => {
		deepStrictEqual(
			{},
			enonify({prop: undefined})
		)
	})

	it('Deletes a property with the value NaN from an object', () => {
		deepStrictEqual(
			{},
			enonify({prop: NaN})
		)
	})

	it('Flattens an array', () => {
		deepStrictEqual(
			[false, 0, 'a'],
			enonify([false, [0], 'a'])
		)
	})

	it('Turns an array with a single boolean false item, into just the boolean false', () => {
		deepStrictEqual(
			false,
			enonify([false])
		)
	})

	it('Turns an array with a single boolean false item, into just the boolean true', () => {
		deepStrictEqual(
			true,
			enonify([true])
		)
	})

	it('Turns an array with a single string item, into just the string', () => {
		deepStrictEqual(
			'a',
			enonify(['a'])
		)
	})

	it('Turns an array with a single Date Object item, into just the Date Object', () => {
		const now = new Date();
		deepStrictEqual(
			now,
			enonify([now])
		)
	})

	/*it("Turns Inifity into undefined", () => {
		deepStrictEqual(
			undefined,
			enonify(Inifity)
		)
	})*/

	it("Turns NaN into undefined", () => {
		deepStrictEqual(
			undefined,
			enonify(NaN)
		)
	})

	it("Doesn't affect the boolean false", () => {
		deepStrictEqual(
			false,
			enonify(false)
		)
	})

	it("Doesn't affect the boolean true", () => {
		deepStrictEqual(
			true,
			enonify(true)
		)
	})

	it("Doesn't affect the number 0", () => {
		deepStrictEqual(
			0,
			enonify(0)
		)
	})

	it("Doesn't affect the number -0", () => {
		deepStrictEqual(
			-0,
			enonify(-0)
		)
	})

	it("Doesn't affect the floating point number 3.14", () => {
		deepStrictEqual(
			3.14,
			enonify(3.14)
		)
	})

	it("Doesn't affect the floating point number -3.14", () => {
		deepStrictEqual(
			-3.14,
			enonify(-3.14)
		)
	})

	it("Doesn't affect the string 'false'", () => {
		deepStrictEqual(
			'false',
			enonify('false')
		)
	})

	it("Doesn't affect the string '0'", () => {
		deepStrictEqual(
			'0',
			enonify('0')
		)
	})

	it("Doesn't affect new Date()", () => {
		const now = new Date();
		deepStrictEqual(
			now,
			enonify(now)
		)
	})
})

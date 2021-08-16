import {deepStrictEqual} from 'assert';
import {print} from 'q-i';
//import serialize from 'serialize-javascript';

import {enonify} from '../../../dist/esm/index.mjs';

// Unable to clone functions
/*import v8 from 'v8';
const structuredClone = obj => {
	return v8.deserialize(v8.serialize(obj));
};*/

const ARRAY_EMPTY = [];

const BOOLEAN_FALSE = false;
const BOOLEAN_TRUE = true;

const DATE = new Date();

const FUNCTION = () => {};

const INFINITY = Infinity;
const INFINITY_NEGATIVE = -Infinity;

const NAN = NaN;

const NULL = null;

const NUMBER_FLOAT = 3.14;
const NUMBER_FLOAT_NEGATIVE = -3.14;
const NUMBER_ZERO = 0;
const NUMBER_ZERO_NEGATIVE = -0;

const OBJECT_EMPTY = {};

const STRING = 'string';
const STRING_DATE = DATE.toISOString();
const STRING_EMPTY = '';
const STRING_FALSE = 'false';
const STRING_TRUE = 'true';
const STRING_ZERO = '0';
const STRING_ZERO_NEGATIVE = '-0';

const UNDEFINED = undefined;

/*function deserialize(serializedJavascript) {
	return eval('(' + serializedJavascript + ')');
}

function structuredClone(value) {
	return deserialize(serialize(value))
}*/

// It seems Enonic XP doesn't handle arrays, where the data is of different types
/*const ARRAY = [
	ARRAY_EMPTY,
	BOOLEAN_FALSE,
	BOOLEAN_TRUE,
	DATE,
	FUNCTION,
	INFINITY,
	INFINITY_NEGATIVE
];*/
const ARRAY_OF_ARRAY = [ARRAY_EMPTY];
const ARRAY_OF_BOOLEANS = [BOOLEAN_FALSE, BOOLEAN_TRUE];
const ARRAY_OF_DATE = [DATE];
const ARRAY_OF_FUNCTION = [FUNCTION];
const ARRAY_OF_INFINITIES = [INFINITY, INFINITY_NEGATIVE];
const ARRAY_OF_NAN = [NAN];
const ARRAY_OF_NULL = [NULL];
const ARRAY_OF_NUMBERS = [
	NUMBER_FLOAT,
	NUMBER_FLOAT_NEGATIVE,
	NUMBER_ZERO,
	NUMBER_ZERO_NEGATIVE
];
const ARRAY_OF_OBJECT = [OBJECT_EMPTY];
const ARRAY_OF_STRINGS = [
	STRING,
	STRING_DATE,
	STRING_EMPTY,
	STRING_FALSE,
	STRING_TRUE,
	STRING_ZERO,
	STRING_ZERO_NEGATIVE
];
const ARRAY_OF_UNDEFINED = [UNDEFINED];


//ARRAY.push(structuredClone(ARRAY));

const nameOf = (fn) => (fn).toString().replace(/[ |()=>]/g,'');

const OBJECT = {
	//[nameOf(() => ARRAY)]: ARRAY,
	[nameOf(() => ARRAY_EMPTY)]: ARRAY_EMPTY,
	[nameOf(() => ARRAY_OF_ARRAY)]: ARRAY_OF_ARRAY,
	[nameOf(() => ARRAY_OF_BOOLEANS)]: ARRAY_OF_BOOLEANS,
	[nameOf(() => ARRAY_OF_DATE)]: ARRAY_OF_DATE,
	[nameOf(() => ARRAY_OF_FUNCTION)]: ARRAY_OF_FUNCTION,
	[nameOf(() => ARRAY_OF_INFINITIES)]: ARRAY_OF_INFINITIES,
	[nameOf(() => ARRAY_OF_NAN)]: ARRAY_OF_NAN,
	[nameOf(() => ARRAY_OF_NULL)]: ARRAY_OF_NULL,
	[nameOf(() => ARRAY_OF_NUMBERS)]: ARRAY_OF_NUMBERS,
	[nameOf(() => ARRAY_OF_OBJECT)]: ARRAY_OF_OBJECT,
	[nameOf(() => ARRAY_OF_STRINGS)]: ARRAY_OF_STRINGS,
	[nameOf(() => ARRAY_OF_UNDEFINED)]: ARRAY_OF_UNDEFINED,

	[nameOf(() => BOOLEAN_FALSE)]: BOOLEAN_FALSE,
	[nameOf(() => BOOLEAN_TRUE)]: BOOLEAN_TRUE,

	[nameOf(() => DATE)]: DATE, // q-i outputs Date infront of new Date() which is bad js :(
	[nameOf(() => FUNCTION)]: FUNCTION,

	[nameOf(() => INFINITY)]: INFINITY,
	[nameOf(() => INFINITY_NEGATIVE)]: INFINITY_NEGATIVE,

	[nameOf(() => NAN)]: NAN,
	[nameOf(() => NULL)]: NULL,

	[nameOf(() => NUMBER_FLOAT)]: NUMBER_FLOAT,
	[nameOf(() => NUMBER_FLOAT_NEGATIVE)]: NUMBER_FLOAT_NEGATIVE,
	[nameOf(() => NUMBER_ZERO)]: NUMBER_ZERO,
	[nameOf(() => NUMBER_ZERO_NEGATIVE)]: NUMBER_ZERO_NEGATIVE,

	[nameOf(() => OBJECT_EMPTY)]: OBJECT_EMPTY,

	[nameOf(() => STRING)]: STRING,
	[nameOf(() => STRING_DATE)]: STRING_DATE,
	[nameOf(() => STRING_EMPTY)]: STRING_EMPTY,
	[nameOf(() => STRING_FALSE)]: STRING_FALSE,
	[nameOf(() => STRING_TRUE)]: STRING_TRUE,
	[nameOf(() => STRING_ZERO)]: STRING_ZERO,
	[nameOf(() => STRING_ZERO_NEGATIVE)]: STRING_ZERO_NEGATIVE,

	[nameOf(() => UNDEFINED)]: UNDEFINED
}

//ARRAY.push(structuredClone(OBJECT));
//OBJECT[nameOf(() => OBJECT)] = structuredClone(OBJECT); // Avoiding circular by cloning

// NOTE: Use the output of this to test in Enonic XP.
//console.log(OBJECT);
print(OBJECT, { maxItems: Infinity });

describe('enonify', () => {
	it('returns what Enonic XP stores', () => {
		deepStrictEqual(
			{
				//[nameOf(() => ARRAY_EMPTY)]: ARRAY_EMPTY, // Deleted by Enonic XP
				//[nameOf(() => ARRAY_OF_ARRAY)]: ARRAY_OF_ARRAY, // Deleted by Enonic XP
				[nameOf(() => ARRAY_OF_BOOLEANS)]: ARRAY_OF_BOOLEANS,
				[nameOf(() => ARRAY_OF_DATE)]: STRING_DATE,
				//[nameOf(() => ARRAY_OF_FUNCTION)]: ARRAY_OF_FUNCTION, // Deleted by Enonic XP
				//[nameOf(() => ARRAY_OF_INFINITIES)]: ARRAY_OF_INFINITIES, // Deleted by Enonic XP
				//[nameOf(() => ARRAY_OF_NAN)]: ARRAY_OF_NAN, // Deleted by Enonic XP
				//[nameOf(() => ARRAY_OF_NULL)]: ARRAY_OF_NULL, // Deleted by Enonic XP
				[nameOf(() => ARRAY_OF_NUMBERS)]: ARRAY_OF_NUMBERS,
				[nameOf(() => ARRAY_OF_OBJECT)]: ARRAY_OF_OBJECT[0],
				[nameOf(() => ARRAY_OF_STRINGS)]: ARRAY_OF_STRINGS,
				//[nameOf(() => ARRAY_OF_UNDEFINED)]: ARRAY_OF_UNDEFINED, // Deleted by Enonic XP

				[nameOf(() => BOOLEAN_FALSE)]: BOOLEAN_FALSE,
				[nameOf(() => BOOLEAN_TRUE)]: BOOLEAN_TRUE,

				[nameOf(() => DATE)]: STRING_DATE, // Stringified in Enonic XP

				//[nameOf(() => FUNCTION)]: FUNCTION, // Deleted by Enonic XP

				//[nameOf(() => INFINITY)]: INFINITY, // Deleted by Enonic XP
				//[nameOf(() => INFINITY_NEGATIVE)]: INFINITY_NEGATIVE, // Deleted by Enonic XP

				//[nameOf(() => NAN)]: NAN, // Deleted by Enonic XP
				//[nameOf(() => NULL)]: NULL, // Deleted by Enonic XP

				[nameOf(() => NUMBER_FLOAT)]: NUMBER_FLOAT,
				[nameOf(() => NUMBER_FLOAT_NEGATIVE)]: NUMBER_FLOAT_NEGATIVE,
				[nameOf(() => NUMBER_ZERO)]: NUMBER_ZERO,
				[nameOf(() => NUMBER_ZERO_NEGATIVE)]: NUMBER_ZERO_NEGATIVE,

				[nameOf(() => OBJECT_EMPTY)]: OBJECT_EMPTY,

				[nameOf(() => STRING)]: STRING,
				[nameOf(() => STRING_DATE)]: STRING_DATE,
				[nameOf(() => STRING_EMPTY)]: STRING_EMPTY,
				[nameOf(() => STRING_FALSE)]: STRING_FALSE,
				[nameOf(() => STRING_TRUE)]: STRING_TRUE,
				[nameOf(() => STRING_ZERO)]: STRING_ZERO,
				[nameOf(() => STRING_ZERO_NEGATIVE)]: STRING_ZERO_NEGATIVE//,

				//[nameOf(() => UNDEFINED)]: UNDEFINED // Deleted by Enonic XP
			},
			enonify(OBJECT)
		)
	})

	it('Deletes a property with the value null from an object', () => {
		deepStrictEqual(
			{},
			enonify({[nameOf(() => NULL)]: NULL})
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

	it('Turns an array with a single Date Object item, into just a Date ISO String', () => {
		const now = new Date();
		const isoString = now.toISOString()
		deepStrictEqual(
			isoString,
			enonify([now])
		)
	})

	it("Turns Inifity into undefined", () => {
		deepStrictEqual(
			undefined,
			enonify(Infinity)
		)
	})

	it("Turns Date object into Date ISO String", () => {
		const now = new Date();
		const isoString = now.toISOString()
		deepStrictEqual(
			isoString,
			enonify(now)
		)
	})

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
})

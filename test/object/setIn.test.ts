import * as assert from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { setIn } from '../../index';

//const deepStrictEqual = assert.deepStrictEqual;
const throws = assert.throws;


describe('setIn', () => {
	describe('unsafe properties', () => {
		test('should not allow setting constructor', () => {
			throws(() => setIn({}, 'a.constructor.b', 'c'));
			throws(() => setIn({}, 'a.constructor', 'c'));
			throws(() => setIn({}, 'constructor', 'c'));
		});

		test('should not allow setting prototype', () => {
			throws(() => setIn({}, 'a.prototype.b', 'c'));
			throws(() => setIn({}, 'a.prototype', 'c'));
			throws(() => setIn({}, 'prototype', 'c'));
		});

		test('should not allow setting __proto__', () => {
			throws(() => setIn({}, 'a.__proto__.b', 'c'));
			throws(() => setIn({}, 'a.__proto__', 'c'));
			throws(() => setIn({}, '__proto__', 'c'));
		});
	}); // describe unsafe properties

	test('should return non-objects', () => {
		const str = setIn('foo', 'a.b', 'c');
		assert.equal(str, 'foo');
		const _null = setIn(null, 'a.b', 'c');
		assert.equal(_null, null);
	});

	/*test('should set when key is a symbol', () => {
		const key = Symbol('foo');
		const obj = {};
		setIn(obj, key, 'bar');
		assert.equal(obj[key], 'bar');
  	});*/

	test('should set on the root of the object', () => {
		const o = {};
		setIn(o, 'foo', 'bar');
		//@ts-expect-error TS2339: Property 'foo' does not exist on type '{}'.
		assert.equal(o.foo, 'bar');
	});

	test('should set the specified property.', () => {
		assert.deepEqual(setIn({ a: 'aaa', b: 'b' }, 'a', 'bbb'), { a: 'bbb', b: 'b' });
	});

	test('should set a nested property', () => {
		const o = {};
		setIn(o, 'a.b', 'c');
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		assert.equal(o.a.b, 'c');
	});

	test('should set a nested property where the last key is a symbol', () => {
		const o = {};
		setIn(o, 'a.b', 'c');
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		assert.equal(o.a.b, 'c');
	});

	// TODO: Have an option to allow overwriting intermediary non object values?
	/*test('should support passing an array as the key', () => {
		const actual = setIn({ a: 'a', b: { c: 'd' } }, ['b', 'c', 'd'], 'eee');
		assert.deepEqual(actual, { a: 'a', b: { c: { d: 'eee' } } });
  	});*/

	test('should support passing an array as the key', () => {
		const actual = setIn({ a: 'a', b: { c: {} } }, ['b', 'c', 'd'], 'eee');
		assert.deepEqual(actual, { a: 'a', b: { c: { d: 'eee' } } });
	});

	// TODO: Have an option to allow overwriting intermediary non object values?
	/*test('should set a deeply nested value.', () => {
		const actual = setIn({ a: 'a', b: { c: 'd' } }, 'b.c.d', 'eee');
		assert.deepEqual(actual, { a: 'a', b: { c: { d: 'eee' } } });
	});*/

	test('should set a deeply nested value.', () => {
		const actual = setIn({ a: 'a', b: { c: {} } }, 'b.c.d', 'eee');
		assert.deepEqual(actual, { a: 'a', b: { c: { d: 'eee' } } });
	});

	test('should allow keys to be whitespace', () => {
		const o = {};
		setIn(o, 'a. .a', { y: 'z' });
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		assert.deepEqual(o.a[' '].a, { y: 'z' });
	});

	/*test('should extend an array', () => {
		const o = { a: [] };
		setIn(o, 'a.0', { y: 'z' });
		assert.ok(Array.isArray(o.a));
		assert.deepEqual(o.a[0], { y: 'z' });
  	});*/

	/*test('should create an array if it does not already exist', () => {
		const o = {};
		setIn(o, 'a.0.a', { y: 'z' });
		setIn(o, 'a.1.b', { y: 'z' });
		setIn(o, 'a.2.c', { y: 'z' });
		setIn(o, 'b.0', { y: 'z' });
		setIn(o, '0', { y: 'z' });
		assert.ok(Array.isArray(o.a));
		assert.deepEqual(o.a[0].a, { y: 'z' });
		assert.deepEqual(o.a[1].b, { y: 'z' });
		assert.deepEqual(o.a[2].c, { y: 'z' });
		assert.deepEqual(o.b, [{ y: 'z' }]);
		assert.deepEqual(o['0'], { y: 'z' });
	});*/

	test('should extend a function', () => {
		const log = () => {/**/};
		const warning = () => {/**/};
		const o = {};

		setIn(o, 'helpers.foo', log);
		setIn(o, 'helpers.foo.warning', warning);
		//@ts-expect-error TS2339: Property 'helpers' does not exist on type '{}'.
		assert.equal(typeof o.helpers.foo, 'function');
		//@ts-expect-error TS2339: Property 'helpers' does not exist on type '{}'.
		assert.equal(typeof o.helpers.foo.warning, 'function');
	});

	test('should extend an object in an array', () => {
		const o = { a: [{}, {}, {}] };
		setIn(o, 'a.0.a', { y: 'z' });
		setIn(o, 'a.1.b', { y: 'z' });
		setIn(o, 'a.2.c', { y: 'z' });
		assert.ok(Array.isArray(o.a));
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		assert.deepEqual(o.a[0].a, { y: 'z' });
		//@ts-expect-error TS2339: Property 'b' does not exist on type '{}'.
		assert.deepEqual(o.a[1].b, { y: 'z' });
		//@ts-expect-error TS2339: Property c' does not exist on type '{}'.
		assert.deepEqual(o.a[2].c, { y: 'z' });
	});

	test('should create a deeply nested property if it does not already exist', () => {
		const o = {};
		setIn(o, 'a.b.c.d.e', 'c');
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		assert.equal(o.a.b.c.d.e, 'c');
	});

	test('should not create a nested property if it does already exist', () => {
		const first = { name: 'Halle' };
		const o = { a: first };
		setIn(o, 'a.b', 'c');
		//@ts-expect-error TS2339: Property 'b' does not exist on type '{ name: string}'.
		assert.equal(o.a.b, 'c');
		assert.equal(o.a, first);
		assert.equal(o.a.name, 'Halle');
	});

	test('should support immediate properties', () => {
		const o = {};
		setIn(o, 'a', 'b');
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		assert.equal(o.a, 'b');
	});

	test('should use property paths to set nested values from the source object.', () => {
		const o = {};
		setIn(o, 'a.locals.name', { first: 'Brian' });
		setIn(o, 'b.locals.name', { last: 'Woodward' });
		setIn(o, 'b.locals.name.last', 'Woodward');
		assert.deepEqual(o, { a: { locals: { name: { first: 'Brian' } } }, b: { locals: { name: { last: 'Woodward' } } } });
	});

	test('should delete the property when value is undefined', () => {
		const fixture = {};
		assert.deepEqual(setIn(fixture, 'a.locals.name'), { a: { locals: {} } });
		assert.deepEqual(setIn(fixture, 'b.locals.name'), { b: { locals: {} }, a: { locals: {} } });
		assert.deepEqual(setIn({ a: 'a', b: { c: 'd' } }, 'b.c'), { a: 'a', b: {} });
	});

	test('should return the entire object if no property is passed.', () => {
		//@ts-expect-error TS2554: Expected 2-3 arguments, but got 1.
		assert.deepEqual(setIn({ a: 'a', b: { c: 'd' } }), { a: 'a', b: { c: 'd' } });
	});

	test('should set non-plain objects', done => {
		const o = {};

		setIn(o, 'a.b', new Date());
		//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
		const firstDate = o.a.b.getTime();

		setTimeout(function() {
			setIn(o, 'a.b', new Date());
			//@ts-expect-error TS2339: Property 'a' does not exist on type '{}'.
			const secondDate = o.a.b.getTime();

			assert.notDeepEqual(firstDate, secondDate);
			done();
		}, 10);
	});

	/*describe('escaping', () => {
    test('should not split escaped dots', () => {
      const o = {};
      setIn(o, 'a\\.b.c.d.e', 'c');
      assert.equal(o['a.b'].c.d.e, 'c');
    });

    test('should support multiple escaped dots', () => {
      const obj1 = {};
      setIn(obj1, 'e\\.f\\.g', 1);
      assert.equal(obj1['e.f.g'], 1);

      const obj2 = {};
      setIn(obj2, 'e\\.f.g\\.h\\.i.j', 1);
      assert.deepEqual(obj2, { 'e.f': { 'g.h.i': { j: 1 } } });
    });

    test('should support multiple escaped dots', () => {
      const obj1 = {};
      const key = Symbol('key');
      setIn(obj1, [key, 'e.f', 'g'], 1);
      assert.equal(obj1[key]['e.f'].g, 1);

      const obj2 = {};
      setIn(obj2, 'e\\.f.g\\.h\\.i.j', 1);
      assert.deepEqual(obj2, { 'e.f': { 'g.h.i': { j: 1 } } });
    });

    /*test('should correctly parse multiple consecutive backslashes', () => {
      assert.deepEqual(set.split('a.b.c'), ['a', 'b', 'c']);
      assert.deepEqual(set.split('b\\.c\\.d'), ['b.c.d']);
      assert.deepEqual(set.split('b\\\\.c\\.d'), ['b\\', 'c.d']);
      assert.deepEqual(set.split('a.b\\.c'), ['a', 'b.c']);
      assert.deepEqual(set.split('a.b\\\\.c'), ['a', 'b\\', 'c']);
      assert.deepEqual(set.split('a.b\\\\\\.c'), ['a', 'b\\.c']);
  });
});*/
}); // describe setIn

// error  Don't use `Object` as a type. The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.
// - If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.
// - If you want a type meaning "any value", you probably want `unknown` instead  @typescript-eslint/ban-types

// https://stackoverflow.com/questions/49464634/difference-between-object-and-object-in-typescript
// TypeScript has three confusing types: Object, {} and object.
//
// Object
// Contains stuff (like toString(), hasOwnProperty()) that is present in all JavaScript objects.
// Any value (primitive, non-primitive) can be assigned to Object type.
//
// {}
// {} is an empty object.
// It is pretty much the same as Object in runtime, but different in compile time.
// In compile time {} doesn't have Object's members and Object has more strict behavior.
//
// object
// object was introduced in TypeScript 2.2. It is any non-primitive type.
// You can't assign to it any primitive type like bool, number, string, symbol.

export const isObject = (value: object | unknown): value is object =>
	Object.prototype.toString.call(value).slice(8,-1) === 'Object';

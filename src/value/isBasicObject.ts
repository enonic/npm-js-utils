// error  Don't use `Object` as a type. The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.
// - If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.
// - If you want a type meaning "any value", you probably want `unknown` instead  @typescript-eslint/ban-types

//eslint-disable-next-line @typescript-eslint/ban-types
export const isBasicObject = (value :Object|unknown) :value is Object => typeof value === 'object';

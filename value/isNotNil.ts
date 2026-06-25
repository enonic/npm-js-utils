/**
 * Check if a value is not `null` or `undefined`.
 *
 * Acts as a TypeScript type guard, narrowing the type of `value`
 * from `T | null | undefined` to `NonNullable<T>` if true.
 *
 * @param value - The value to check.
 * @returns `true` if the value is neither `null` nor `undefined`.
 */
export function isNotNil<T>(value: T | null | undefined): value is NonNullable<T> {
	return value != null;
}

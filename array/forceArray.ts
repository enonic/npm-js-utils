/**
 * Wraps a non-array value in an array, or returns the array as-is.
 *
 * @deprecated Use `noNilsArray` instead for safe null/undefined handling.
 * @warning Known issues with nil values:
 *  - Wraps standalone `null`/`undefined` as `[null]`/`[undefined]` instead of returning `[]`.
 *  - Does not filter out `null`/`undefined` elements within existing arrays.
 *  - Provides a false sense of type safety, often leading to runtime errors downstream.
 *
 * @param data - The value or array to process.
 * @returns The original array, or the value wrapped in a new array.
 */
export function forceArray<T>(data: T | Array<T>): Array<T> {
	return (Array.isArray(data) ? data : [data]);
}

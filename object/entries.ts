import type { ArrayLike } from '../types/Object.d';


// Prototypes for Object.entries() similar to lib.es2017.object.d.ts
export function entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][];
export function entries(o: object): [string, unknown][];

// Implementation
export function entries<T>(o: { [s: string]: T } | ArrayLike<T>): [string, T][] {
	return Object.keys(o).map((key) => [key, o[key]]);
}

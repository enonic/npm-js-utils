import type { ArrayLike } from '../types/Object.d';


// Prototypes for Object.values() similar to lib.es2017.object.d.ts
export function values<T>(o: { [s: string]: T } | ArrayLike<T>): T[];
export function values(o: object): unknown[]

// Implementation
export function values<T>(o: { [s: string]: T } | ArrayLike<T>): T[] {
	return Object.keys(o).map((key) => o[key]);
}

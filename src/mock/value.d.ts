type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never
type FixedLengthArray<T extends any[]> =
  Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>>
  & { [Symbol.iterator]: () => IterableIterator< ArrayItems<T> > }

type GeoPointArray = FixedLengthArray<[number, number]>;

export type GeoPointFunction = (v :GeoPointArray) => unknown;
export type StringFunction = (v :string) => unknown;
export type UnknownFunction = (v :unknown) => unknown;

export interface ValueLib {
	geoPoint :GeoPointFunction
	geoPointString :StringFunction
	instant :UnknownFunction
	localDate :UnknownFunction
	localDateTime :UnknownFunction
	localTime :UnknownFunction
	reference :StringFunction
}

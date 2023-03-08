import {isInt} from './isInt';

//@ts-expect-error es5 doesn't have Number.isInteger, but es2015 does, so it depends on the environment it's used in.
export const isInteger = Number.isInteger || isInt;

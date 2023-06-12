import isBigInt from './isBigInt';

export {isBasicObject} from './isBasicObject';
export { isBigInt };
export {isBoolean} from './isBoolean';
export {isDate} from './isDate';
export {isDateString} from './isDateString';
export {isFalse} from './isFalse';
export {isFunction} from './isFunction';
export {isGeoPoint} from './isGeoPoint';
export {isGeoPointArray} from './isGeoPointArray';
export {isGeoPointString} from './isGeoPointString';
export {isInfinity} from './isInfinity';
export {isInstantString} from './isInstantString';
export {isInt} from './isInt';
export {isInteger} from './isInteger';
export {isLocalDateString} from './isLocalDateString';
export {isLocalDateTimeString} from './isLocalDateTimeString';
export {isNonNegativeIntegerString} from './isNonNegativeIntegerString';
export {isNotSet} from './isNotSet';
export {isNull} from './isNull';
export {isNumber} from './isNumber';
export {isObject} from './isObject';
export {isPositiveInteger} from './isPositiveInteger';
export {isPropertyKey} from './isPropertyKey';
export {isSet} from './isSet';
export {isString} from './isString';
export {isStringLiteral} from './isStringLiteral';
export {isStringObject} from './isStringObject';
export {isSymbol} from './isSymbol';
export {isTime} from './isTime';
export {isTimeString} from './isTimeString';
export {isTrue} from './isTrue';
export {isUndefined} from './isUndefined';
export {isUuidV4String} from './isUuidV4String';
export {toStr} from './toStr';


export function isNotFalse(value :unknown): boolean {
	return value !== false;
}


export function isNotTrue(value :unknown): boolean {
	return value !== true;
}

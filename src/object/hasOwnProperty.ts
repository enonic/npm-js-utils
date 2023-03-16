import {isBasicObject} from '../value/isBasicObject';
import {isPropertyKey} from '../value/isPropertyKey';
import {toStr} from '../value/toStr';


export function hasOwnProperty<
	//eslint-disable-next-line @typescript-eslint/ban-types
	X extends Object,//Record<PropertyKey,unknown|never>, // TODO Does this include arrays? It needs to because a basic Object includes Array.
	Y extends PropertyKey
> (
	obj: X,
	propKey: Y
) :obj is X & Record<Y, unknown> {
	if (!isBasicObject(obj)) {
		throw new Error(`First parameter to hasOwnProperty must be a basic Object! ${toStr(obj)}`);
	}
	if (!isPropertyKey(propKey)) {
		throw new Error(`Second parameter to hasOwnProperty must be a PropertyKey (string|number|symbol)! ${toStr(propKey)}`);
	}
	return obj.hasOwnProperty(propKey);
}

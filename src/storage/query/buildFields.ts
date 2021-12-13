import {forceArray} from '../../array/forceArray';
import {isObject} from '../../value';

import type {
	FieldObject,
	Fields
} from './constants';


export function buildFields(fields :Fields) {
	return `'${forceArray(fields).map((stringOrObj) => {
		//console.debug('stringOrObj', stringOrObj);
		let boost :number|undefined;
		let field :string;
		if (isObject(stringOrObj)) {
			boost = (stringOrObj as FieldObject).boost || undefined;
			field = (stringOrObj as FieldObject).field;
		} else {
			field = stringOrObj as string;
		}
		//console.debug('field', field);
		return `${field}${boost ? `^${boost}`: ''}`;
	}).join(',')}'`;
}

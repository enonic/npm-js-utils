import type {
	FieldObject,
	Fields
} from './constants';


import {forceArray} from '../../array/forceArray';
import {isObject} from '../../value';



export function buildFieldsArray(fields :Fields) {
	return forceArray(fields).map((stringOrObj) => {
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
		return `${field}${boost && boost !== 1 ? `^${boost}`: ''}`;
	});
}


export function buildFields(fields :Fields) {
	return `'${buildFieldsArray(fields).join(',')}'`;
}

import {hasOwnProperty} from '../object/hasOwnProperty';
import {isNumber} from '../value/isNumber';
import {isObject} from '../value';
import {isString} from '../value/isString';
import {toStr} from '../value';


/*interface LooseObject {
	[key :PropertyKey] :unknown
}*/


function compareNumbers(
	a :number,
	b :number
) :number {
	return a - b;
}


function compareStrings(
	a :string,
	b :string,
	caseSensitive :boolean = true
) :number {
	if (!caseSensitive) { // TODO asciifold?
		a = a.toLowerCase();
		b = b.toLowerCase();
	}
	if (a < b) {return -1;}
	if (a > b) {return 1;}
	return 0; // equal
}


export function sortByProperty<T>(
	array :Array<T>,
	propertyName :string
) :Array<T> {
	const localArray :Array<T> = JSON.parse(JSON.stringify(array));
	return localArray.sort((
		a,
		b
	) => {
		if (!isObject(a) || !isObject(b)) {
			throw new TypeError(`sortByProperty: a or b not an object! a:${toStr(a)} b:${toStr(b)}`);
		}
		if (!hasOwnProperty(a, propertyName)) {
			throw new TypeError(`sortByProperty: a doesn't have a property named:'${propertyName}'! a:${toStr(a)}`);
		}
		if (!hasOwnProperty(b, propertyName)) {
			throw new TypeError(`sortByProperty: b doesn't have a property named:'${propertyName}'! b:${toStr(b)}`);
		}
		const valueA :unknown = a[propertyName];
		const valueB :unknown = b[propertyName];
		if (
			isNumber(valueA)
			&& isNumber(valueB)
		) {
			return compareNumbers(
				valueA,
				valueB
			);
		}
		if (
			isString(valueA)
			&& isString(valueB)
		) {
			return compareStrings(
				valueA,
				valueB
			);
		}
		throw new TypeError(`sortByProperty: Value of propertyName:${propertyName} is neither number nor string! a:${toStr(a)} b:${toStr(b)}`);
	});
}

/*export function sortBy(
	array :Array<unknown>,
	iteratees :string[]
) :Array<unknown> {

}*/

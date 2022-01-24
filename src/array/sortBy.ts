import {isNumber} from '../value/isNumber';
import {isString} from '../value/isString';
import {toStr} from '../value';


interface LooseObject {
	[key :string] :unknown
}


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


export function sortByProperty(
	array :LooseObject[],
	propertyName :string
) :LooseObject[] {
	const localArray :LooseObject[] = JSON.parse(JSON.stringify(array));
	return localArray.sort((
		a,
		b
	) => {
		if (!a.hasOwnProperty(propertyName)) {
			throw new TypeError(`sortByProperty: a doesn't have a property named:'${propertyName}'! a:${toStr(a)}`);
		}
		if (!b.hasOwnProperty(propertyName)) {
			throw new TypeError(`sortByProperty: b doesn't have a property named:'${propertyName}'! b:${toStr(b)}`);
		}
		if (
			isNumber(a[propertyName])
			&& isNumber(b[propertyName])
		) {
			return compareNumbers(
				a[propertyName] as number,
				b[propertyName] as number
			);
		}
		if (
			isString(a[propertyName])
			&& isString(a[propertyName])
		) {
			return compareStrings(
				a[propertyName] as string,
				b[propertyName] as string
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

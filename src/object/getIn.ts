import {isBasicObject} from '../value/isBasicObject';
import {isNumber} from '../value/isNumber';
import {hasOwnProperty} from './hasOwnProperty';


export function getIn<
	O extends Object, // eslint-disable-line @typescript-eslint/ban-types
	K extends keyof O,
	V extends O[K],
	D/* extends unknown*/
>(
	source :O,
	path :string | Array<string|number> | number,
	def? :D
) :V|D {
	if (!Array.isArray(path)) {
		if (isNumber(path)) {
			path = [path];
		} else {
			path = path.split('.');
		}
	}
	//console.debug('path:%s', path);

	let leafKey = path[0] as string|number;
	//console.debug('leafKey:%s', leafKey);

	let obj = source as unknown;
	if (path.length > 1) {
		const pathLength = path.length
		leafKey = path[pathLength - 1] as string;

		for (let i = 0; i < pathLength - 1; i++) {
			const branchKey = path[i] as string;
			//console.debug('branchKey:%s', branchKey);

			if (
				!isBasicObject(obj)
				|| !hasOwnProperty(obj, branchKey)
				|| typeof obj[branchKey] === 'undefined'
			) {
				return def as D;
			}

			obj = obj[branchKey]; // Step into branch
		} // for
	} // if

	//console.debug('isBasicObject(obj):%s', isBasicObject(obj));
	if (
		!isBasicObject(obj)
		|| !hasOwnProperty(obj, leafKey)
		|| typeof obj[leafKey] === 'undefined'
	) {
		//console.debug('returing default:%s', def);
		return def as D;
	}
	return obj[leafKey] as V;
} // getIn

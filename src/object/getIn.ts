import type {AnyObject} from '../types';

import {isObject} from '../value/isObject';
import {hasOwnProperty} from './hasOwnProperty';


export function getIn<
	O extends AnyObject,
	K extends keyof O,
	V extends O[K],
	D/* extends unknown*/
>(
	source :O,
	path :string | Array<string>,
	def? :D
) :V|D {
	if (!Array.isArray(path)) {
		path = path.split('.');
	}

	let leafKey = path[0] as string;

	let obj = source as unknown;
	if (path.length > 1) {
		const pathLength = path.length
		leafKey = path[pathLength - 1] as string;

		for (let i = 0; i < pathLength - 1; i++) {
			const branchKey = path[i] as string;
			//console.debug('branchKey:%s', branchKey);

			if (!isObject(obj) || !hasOwnProperty(obj, branchKey)) {
				return def as D;
			}

			obj = obj[branchKey]; // Step into branch
		} // for
	} // if

	//console.debug('leafKey:%s', leafKey);
	if (
		!isObject(obj)
		|| !hasOwnProperty(obj, leafKey)
		|| typeof obj[leafKey] === 'undefined'
	) {
		return def as D;
	}
	return obj[leafKey] as V;
} // getIn

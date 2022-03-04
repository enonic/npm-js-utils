import type {
	CompoundExpression,
	QueryExpression
} from './types.d';


import {flatten} from '../../../array/flatten';
//import {toStr} from '../../../value';


export function and(...args :Array<QueryExpression & CompoundExpression>) :{
	must :Array<QueryExpression & CompoundExpression>
} {
	//console.debug('args:%s',toStr(args));
	const flattened = flatten(args);
	//console.debug('flattened:%s',toStr(flattened));
	return {
		must: flattened
	};
}

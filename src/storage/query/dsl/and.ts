//import type {OneOrMore} from '../../../types.d';
import type {
	CompoundExpression,
	QueryExpression
} from './types.d';


import {flatten} from '../../../array/flatten';
//import {toStr} from '../../../value';


interface Must {
	must :Array<QueryExpression & CompoundExpression>
}


function and(arg :QueryExpression & CompoundExpression) :Must;
function and(...args :Array<QueryExpression & CompoundExpression>) :Must;
function and(args :Array<QueryExpression & CompoundExpression>) :Must;
function and(...args :any) :Must {
	//console.debug('args:%s',toStr(args));
	const flattened = flatten(args) as Array<QueryExpression & CompoundExpression>;
	//console.debug('flattened:%s',toStr(flattened));
	return {
		must: flattened
	};
}

export { and };

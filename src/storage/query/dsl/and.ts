import type {
	BooleanDslExpression,
	QueryDsl,
} from '/lib/xp/node';


import {flatten} from '../../../array/flatten';
// import {toStr} from '../../../value';


function and(...args: (QueryDsl|QueryDsl[])[]) {
	//console.debug('args:%s',toStr(args));
	const flattened = flatten(args) as QueryDsl[];
	// console.debug('flattened:%s', toStr(flattened));
	return {
		must: flattened
	} as BooleanDslExpression;
}

const must = and;

export {
	and,
	must
};

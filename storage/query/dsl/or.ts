import type {
	BooleanDslExpression,
	QueryDsl,
} from '/lib/xp/node';


import {flatten} from '../../../array/flatten';


function or(...args: (QueryDsl|QueryDsl[])[]) {
	const flattened = flatten(args) as QueryDsl[];
	return {
		should: flattened
	} as BooleanDslExpression;
}

const should = or;

export {
	or,
	should
};

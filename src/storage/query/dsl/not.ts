import type {
	BooleanDslExpression,
	QueryDsl,
} from '/lib/xp/node';


import {flatten} from '../../../array/flatten';


function not(...args: (QueryDsl | QueryDsl[])[]) {
	const flattened = flatten(args) as QueryDsl[];
	return {
		mustNot: flattened
	} as BooleanDslExpression;
}

const mustNot = not;

export {
	mustNot,
	not
};

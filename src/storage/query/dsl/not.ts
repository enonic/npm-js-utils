import type {QueryDsl} from '/lib/xp/node';


import {flatten} from '../../../array/flatten';


interface MustNot {
	mustNot: QueryDsl[]
}

function not(arg: QueryDsl): MustNot;
function not(...args: QueryDsl[]): MustNot;
function not(args: QueryDsl[]): MustNot;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function not(...args: any): MustNot {
	const flattened = flatten(args) as QueryDsl[];
	return {
		mustNot: flattened
	};
}

const mustNot = not;

export {
	mustNot,
	not
};

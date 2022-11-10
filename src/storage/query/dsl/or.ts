import type {QueryDsl} from '/lib/xp/node';


import {flatten} from '../../../array/flatten';


interface Should {
	should: QueryDsl[]
}


function or(arg: QueryDsl): Should;
function or(...args: QueryDsl[]): Should;
function or(args: QueryDsl[]): Should;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function or(...args: any): Should {
	const flattened = flatten(args) as QueryDsl[];
	return {
		should: flattened
	};
}

const should = or;

export {
	or,
	should
};

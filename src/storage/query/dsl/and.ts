import type {QueryDsl} from '/lib/xp/node';


import {flatten} from '../../../array/flatten';
//import {toStr} from '../../../value';


interface Must {
	must: QueryDsl[]
}


function and(arg: QueryDsl): Must;
function and(...args: QueryDsl[]): Must;
function and(args: QueryDsl[]): Must;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function and(...args: any): Must {
	//console.debug('args:%s',toStr(args));
	const flattened = flatten(args) as QueryDsl[];
	//console.debug('flattened:%s',toStr(flattened));
	return {
		must: flattened
	};
}

const must = and;

export {
	and,
	must
};

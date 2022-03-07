//import type {OneOrMore} from '../../../types.d';
import type {
	CompoundExpression,
	QueryExpression
} from './types.d';


import {flatten} from '../../../array/flatten';


interface Should {
	should :Array<QueryExpression & CompoundExpression>
}


function or(arg :QueryExpression & CompoundExpression) :Should;
function or(...args :Array<QueryExpression & CompoundExpression>) :Should;
function or(args :Array<QueryExpression & CompoundExpression>) :Should;
function or(...args :any) :Should {
	const flattened = flatten(args) as Array<QueryExpression & CompoundExpression>;
	return {
		should: flattened
	};
}

const should = or;

export {
	or,
	should
};

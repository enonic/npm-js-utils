import type {
	CompoundExpression,
	QueryExpression
} from './types.d';

import {flatten} from '../../../array/flatten';


export function not(...args :Array<QueryExpression & CompoundExpression>) :{
	mustNot :Array<QueryExpression & CompoundExpression>
} {
	const flattened = flatten(args);
	return {
		mustNot: flattened
	};
}

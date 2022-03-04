import type {
	CompoundExpression,
	QueryExpression
} from './types.d';

import {flatten} from '../../../array/flatten';


export function or(...args :Array<QueryExpression & CompoundExpression>) :{
	should :Array<QueryExpression & CompoundExpression>
} {
	const flattened = flatten(args);
	return {
		should: flattened
	};
}

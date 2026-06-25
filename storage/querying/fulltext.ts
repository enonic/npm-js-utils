import type { DslOperator } from '@enonic-types/core';
import type { QueryExpressionFulltext } from '../../types';
import type { Fields } from '../query/types';
import { fulltextOrNgramDslExpression } from './fulltextOrNgramDslExpression';

/**
 *	Search for words in a field.
 */
export function fulltext(
	fields: Fields,
	query: string,
	operator?: DslOperator,
	boost?: number
): QueryExpressionFulltext {
	return {
		fulltext: fulltextOrNgramDslExpression(fields, query, operator, boost),
	};
}

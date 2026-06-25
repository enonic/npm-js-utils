import type { DslOperator } from '@enonic-types/core';
import type { QueryExpressionNgram } from '../../types';
import type { Fields } from '../query/types';
import { fulltextOrNgramDslExpression } from './fulltextOrNgramDslExpression';

/**
 *	Search for words that begin (edge_ngram) with letters in a field.
 */
export function ngram(
	fields: Fields,
	query: string,
	operator?: DslOperator,
	boost?: number
): QueryExpressionNgram {
	return {
		ngram: fulltextOrNgramDslExpression(fields, query, operator, boost),
	};
}

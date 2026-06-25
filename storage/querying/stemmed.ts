import type { DslOperator, StemmedDslExpression } from '@enonic-types/core';
import type { QueryExpressionStemmed, StemmingLanguageCode } from '../../types';
import type { Fields } from '../query/types';

import { includes as arrayIncludes } from '../../array/includes';
import { isString } from '../../value/isString';
import { STEMMING_LANGUAGE_CODE_ENGLISH, STEMMING_LANGUAGE_CODES } from '../indexing';
import { fulltextOrNgramDslExpression } from './fulltextOrNgramDslExpression';

/**
 *	Search for stemmed words in a field.
 */
export function stemmed(
	fields: Fields,
	query: string,
	language: StemmingLanguageCode = STEMMING_LANGUAGE_CODE_ENGLISH,
	operator?: DslOperator,
	boost?: number
): QueryExpressionStemmed {
	if (!isString(language)) {
		throw new Error('stemmed: Language must be a string!');
	}
	if (!arrayIncludes(STEMMING_LANGUAGE_CODES as unknown as string[], language)) {
		throw new Error(`stemmed: Invalid language:${language}!`);
	}
	const dslExpression = fulltextOrNgramDslExpression(fields, query, operator, boost) as StemmedDslExpression;
	dslExpression.language = language;
	return {
		stemmed: dslExpression,
	};
}

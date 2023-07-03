import type { NgramDslExpression } from '@enonic-types/core';


import isFulltextDslExpression from './isFulltextDslExpression';


// NOTE: The shape of NgramDslExpression is currently identical to FulltextDslExpression
export default function isNgramDslExpression(value: unknown): value is NgramDslExpression {
	return isFulltextDslExpression(value);
}

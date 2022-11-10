import type {PathMatchDslExpression} from '/lib/xp/node';


interface QueryExpressionPathMatch {
	pathMatch: PathMatchDslExpression
}


export function pathMatch(
	field: string,
	path: string,
	boost?: number,
	minimumMatch?: number
): QueryExpressionPathMatch {
	const pathMatch: PathMatchDslExpression = {
		field,
		path
	}
	if (boost) {
		pathMatch.boost = boost;
	}
	if (minimumMatch) {
		pathMatch.minimumMatch = minimumMatch;
	}
	return {
		pathMatch
	};
}

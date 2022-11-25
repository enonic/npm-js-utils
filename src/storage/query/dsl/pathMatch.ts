import type {PathMatchDslExpression} from '/lib/xp/node';


interface QueryExpressionPathMatch {
	pathMatch: PathMatchDslExpression
}


export function pathMatch(
	field: string,
	path: string,
	minimumMatch?: number,
	boost?: number,
): QueryExpressionPathMatch {
	const pathMatch: PathMatchDslExpression = {
		field,
		path
	}
	if (minimumMatch) {
		pathMatch.minimumMatch = minimumMatch;
	}
	if (boost) {
		pathMatch.boost = boost;
	}
	return {
		pathMatch
	};
}

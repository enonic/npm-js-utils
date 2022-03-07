interface QueryExpressionPathMatchParams {
	field :string
	path :string
	//boost? :number
	minimumMatch? :number
}

interface QueryExpressionPathMatch {
	pathMatch :QueryExpressionPathMatchParams
}


export function pathMatch(
	field :string,
	path :string,
	//boost? :number,
	minimumMatch? :number
) :QueryExpressionPathMatch {
	const pathMatch :QueryExpressionPathMatchParams = {
		field,
		path
	}
	/*if (boost) {
		pathMatch.boost = boost;
	}*/
	if (minimumMatch) {
		pathMatch.minimumMatch = minimumMatch;
	}
	return {
		pathMatch
	};
}

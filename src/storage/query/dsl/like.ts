import type {LikeDslExpression} from '/lib/xp/node';


interface QueryExpressionLikeParams<ValueType extends string> extends LikeDslExpression {
	field: LikeDslExpression['field']
	value: ValueType
	boost?: LikeDslExpression['boost']
	type?: LikeDslExpression['type']
}

interface QueryExpressionLike<ValueType extends string> {
	like: QueryExpressionLikeParams<ValueType>
}


export function like<
	ValueType extends string
>(
	field: string,
	value: ValueType,
	boost?: number
): QueryExpressionLike<ValueType> {
	const like: QueryExpressionLikeParams<ValueType> = {
		field,
		value
	}
	if (boost) {
		like.boost = boost;
	}
	return {
		like
	};
}

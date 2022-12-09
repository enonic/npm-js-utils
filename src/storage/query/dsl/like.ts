import type {
	DslQueryType,
	LikeDslExpression,
} from '/lib/xp/node';


import {
	DSL_EXPRESSION_VALUE_TYPE_DATE_TIME,
	DSL_EXPRESSION_VALUE_TYPE_TIME,
} from './term';


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
	boost?: number,
	type?: DslQueryType
): QueryExpressionLike<ValueType> {
	const like: QueryExpressionLikeParams<ValueType> = {
		field,
		value
	}
	if (boost) {
		like.boost = boost;
	}
	if (
		type === DSL_EXPRESSION_VALUE_TYPE_TIME
		|| type === DSL_EXPRESSION_VALUE_TYPE_DATE_TIME
	) {
		like.type = type;
	}
	return {
		like
	};
}

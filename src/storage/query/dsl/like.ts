interface QueryExpressionLikeParams<ValueType> {
	field :string
	value :ValueType
	boost? :number
}

interface QueryExpressionLike<ValueType> {
	like :QueryExpressionLikeParams<ValueType>
}


export function like<
	ValueType
>(
	field :string,
	value :ValueType,
	boost? :number
) :QueryExpressionLike<ValueType> {
	const like :QueryExpressionLikeParams<ValueType> = {
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

interface QueryExpressionTermParams<ValueType> {
	field :string
	value :ValueType
	boost? :number
}

interface QueryExpressionTerm<ValueType> {
	term :QueryExpressionTermParams<ValueType>
}


export function term<
	ValueType
>(
	field :string,
	value :ValueType,
	boost? :number
) :QueryExpressionTerm<ValueType> {
	const term :QueryExpressionTermParams<ValueType> = {
		field,
		value
	}
	if (boost) {
		term.boost = boost;
	}
	return {
		term
	};
}

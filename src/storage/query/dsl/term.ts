import type {TermDslExpression} from '/lib/xp/node';

interface QueryExpressionTermParams<ValueType> extends TermDslExpression {
	field: TermDslExpression['field']
	value: ValueType
	type?: TermDslExpression['type']
	boost?: TermDslExpression['boost']
}

interface QueryExpressionTerm<ValueType> {
	term: QueryExpressionTermParams<ValueType>
}


export function term<
	ValueType
>(
	field: string,
	value: ValueType,
	boost?: number
): QueryExpressionTerm<ValueType> {
	const term: QueryExpressionTermParams<ValueType> = {
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

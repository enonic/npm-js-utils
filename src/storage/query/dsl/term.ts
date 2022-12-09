import type {
	TermDslExpression,
	DslQueryType,
} from '/lib/xp/node';


interface QueryExpressionTermParams<ValueType> extends TermDslExpression {
	field: TermDslExpression['field']
	value: ValueType
	type?: TermDslExpression['type']
	boost?: TermDslExpression['boost']
}

interface QueryExpressionTerm<ValueType> {
	term: QueryExpressionTermParams<ValueType>
}


export const DSL_EXPRESSION_VALUE_TYPE_DATE_TIME = 'dateTime';
export const DSL_EXPRESSION_VALUE_TYPE_TIME = 'time';


export function term<
	ValueType
>(
	field: string,
	value: ValueType,
	boost?: number,
	type?: DslQueryType,
): QueryExpressionTerm<ValueType> {
	const term: QueryExpressionTermParams<ValueType> = {
		field,
		value
	}
	if (boost) {
		term.boost = boost;
	}
	if (
		type === DSL_EXPRESSION_VALUE_TYPE_TIME
		|| type === DSL_EXPRESSION_VALUE_TYPE_DATE_TIME
	) {
		term.type = type;
	}
	return {
		term
	};
}

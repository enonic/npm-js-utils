import type {
	DslQueryType,
	InDslExpression,
} from '/lib/xp/node';


import {
	DSL_EXPRESSION_VALUE_TYPE_DATE_TIME,
	DSL_EXPRESSION_VALUE_TYPE_TIME,
} from './term';


interface QueryExpressionInParams<ValueType> extends InDslExpression {
	field: InDslExpression['field']
	values: ValueType[]
	type?: InDslExpression['type']
	boost?: InDslExpression['boost']
}

interface QueryExpressionIn<ValueType> {
	in: QueryExpressionInParams<ValueType>
}


export function inQuery<
	ValueType
>(
	field: string,
	values: Array<ValueType>,
	boost?: number,
	type?: DslQueryType
): QueryExpressionIn<ValueType> {
	const obj: QueryExpressionInParams<ValueType> = {
		field,
		values
	}
	if (boost) {
		obj.boost = boost;
	}
	if (
		type === DSL_EXPRESSION_VALUE_TYPE_TIME
		|| type === DSL_EXPRESSION_VALUE_TYPE_DATE_TIME
	) {
		obj.type = type;
	}
	return {
		in: obj
	};
}

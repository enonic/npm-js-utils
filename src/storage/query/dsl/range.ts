import type {DslQueryType} from '/lib/xp/node';


import {isDate} from '../../../value/isDate';
import {
	DSL_EXPRESSION_VALUE_TYPE_DATE_TIME,
	DSL_EXPRESSION_VALUE_TYPE_TIME,
} from './term';


interface QueryExpressionRangeParams<
	IndexType extends number|string
> {
	field: string
	gt?: IndexType
	gte?: IndexType
	lt?: IndexType
	lte?: IndexType
	boost?: number
	type?: DslQueryType
}

interface QueryExpressionRange<
	IndexType extends number|string
> {
	range: QueryExpressionRangeParams<IndexType>
}


function ifDateCastToISOString(v: number|string|Date): number|string {
	if (isDate(v)) {
		return v.toISOString();
	}
	return v;
}


export function range<
	InType extends number|string|Date,
	OutType extends number|string = [InType] extends [number] ? number:  string
>(
	field: string,
	limits: {
		gt?: InType,
		gte?: InType,
		lt?: InType,
		lte?: InType,
	} = {},
	boost?: number,
	type?: DslQueryType
): QueryExpressionRange<OutType> {
	const range: QueryExpressionRangeParams<OutType> = {
		field
	}
	if (limits.gt) {
		range.gt = ifDateCastToISOString(limits.gt) as OutType;
	}
	if (limits.gte) {
		range.gte = ifDateCastToISOString(limits.gte) as OutType;
	}
	if (limits.lt) {
		range.lt = ifDateCastToISOString(limits.lt) as OutType;
	}
	if (limits.lte) {
		range.lte = ifDateCastToISOString(limits.lte) as OutType;
	}
	if (boost) {
		range.boost = boost;
	}
	if (
		type === DSL_EXPRESSION_VALUE_TYPE_TIME
		|| type === DSL_EXPRESSION_VALUE_TYPE_DATE_TIME
	) {
		range.type = type;
	}
	return {
		range
	};
}

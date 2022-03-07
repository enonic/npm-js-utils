import type {AnalysedIndexType} from './types.d';


import {isDate} from '../../../value/isDate';


interface QueryExpressionRangeParams<
	IndexType extends number|string
> {
	field :string
	gt? :IndexType
	gte? :IndexType
	lt? :IndexType
	lte? :IndexType
	boost? :number
	type? :AnalysedIndexType
}

interface QueryExpressionRange<
	IndexType extends number|string
> {
	range :QueryExpressionRangeParams<IndexType>
}


function ifDateCastToISOString(v :number|string|Date) :number|string {
	if (isDate(v)) {
		return v.toISOString();
	}
	return v;
}


export function range<
	InType extends number|string|Date,
	OutType extends number|string = [InType] extends [number] ? number : string
>(
	field :string,
	limits :{
		gt? :InType,
		gte? :InType,
		lt? :InType,
		lte? :InType,
	} = {},
	boost? :number,
	type? :AnalysedIndexType
) :QueryExpressionRange<OutType> {
	const range :QueryExpressionRangeParams<OutType> = {
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
	if (type) {
		range.type = type;
	}
	return {
		range
	};
}

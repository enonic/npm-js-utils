import type {
	Aggregations,
	SortStatementCaseInsensitive,
	StatsAggregation,
	StatsAggregationParams
} from '../../../types/index.d';


export function statsParams(
	field :string,
	order? :SortStatementCaseInsensitive,
	size? :number,
) :StatsAggregationParams {
	const stats :StatsAggregationParams = {
		field
	}
	if (order) {stats.order = order;}
	if (size) {stats.size = size;}
	return stats;
}


export function stats(
	field :string,
	order? :SortStatementCaseInsensitive,
	size? :number,
	aggregations? :Aggregations
) {
	const statsAggregation :StatsAggregation = {
		stats: statsParams(
			field,
			order,
			size
		)
	};
	if (aggregations) {
		statsAggregation.aggregations = aggregations;
	}
	return statsAggregation;
}


/*export function statsNamed<
	Name extends string = string
>({
	field,
	name,
	// Optional
	order,
	size,
	aggregations
} :{
	field :string
	name :Name
	// Optional
	order? :SortStatementCaseInsensitive
	size? :number
	aggregations? :Aggregations
}) /*:Record<Name,statsAggregation>* {
	return {
		[name]: stats(
			field,
			order,
			size,
			aggregations
		)
	} as Record<Name,StatsAggregation>;
}*/

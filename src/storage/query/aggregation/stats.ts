import type {StatsAggregation} from '/lib/xp/node';


export function statsParams(
	field :string,
) :StatsAggregation['stats'] {
	const stats :StatsAggregation['stats'] = {
		field
	}
	return stats;
}


export function stats(
	field :string,
) {
	const statsAggregation :StatsAggregation = {
		stats: statsParams(
			field,
		)
	};
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

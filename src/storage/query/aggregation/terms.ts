import type {
	Aggregations,
	TermsAggregation,
	TermsAggregationParams
} from '../../../mock/node/query/aggregation.d'
import type {SortStatementCaseInsensitive} from '../sort.caseInsensitive.d';
//import type {SortStatement} from '../types.d';


export function termsParams(
	field :string,
	order? :SortStatementCaseInsensitive,
	size? :number,
	minDocCount? :number

) :TermsAggregationParams {
	const terms :TermsAggregationParams = {
		field
	}
	if (order) {terms.order = order;}
	if (size) {terms.size = size;}
	if (minDocCount) {terms.minDocCount = minDocCount;}
	return terms;
}


export function terms(
	field :string,
	order? :SortStatementCaseInsensitive,
	size? :number,
	minDocCount? :number,
	aggregations? :Aggregations
) {
	const termsAggregation :TermsAggregation = {
		terms: termsParams(
			field,
			order,
			size,
			minDocCount
		)
	};
	if (aggregations) {
		termsAggregation.aggregations = aggregations;
	}
	return termsAggregation;
}


/*export function termsNamed<
	Name extends string = string
>({
	field,
	name,
	// Optional
	order,
	size,
	minDocCount,
	aggregations
} :{
	field :string
	name :Name
	// Optional
	order? :SortStatementCaseInsensitive
	size? :number
	minDocCount? :number
	aggregations? :Aggregations
}) /*:Record<Name,TermsAggregation>* {
	return {
		[name]: terms(
			field,
			order,
			size,
			minDocCount,
			aggregations
		)
	} as Record<Name,TermsAggregation>;
}*/

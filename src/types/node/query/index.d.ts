import type {Aggregation} from './Aggregation.d';
import type {
	BasicFilters,
	BooleanFilter
} from './Filters.d';
import type {Highlight} from './Highlight.d';


export type {
	Aggregation,
	Aggregations,
	AggregationsResponse,
	AggregationsResponseBucket,
	AggregationsResponseEntry,
	DateHistogramAggregation,
	DateRangeAggregation,
	MaxAggregation,
	MinAggregation,
	GeoDistanceAggregation,
	RangeAggregation,
	StatsAggregation,
	StatsAggregationParams,
	TermsAggregation,
	TermsAggregationParams,
	ValueCountAggregation
} from './Aggregation.d';
export type {
	AnalysedIndexType,
	CompoundExpression,
	CompoundExpressionBoolean,
	QueryDSL,
	QueryExpression,
	QueryExpressionFulltext,
	QueryExpressionNgram,
	QueryExpressionStemmed
} from './Dsl.d';
export type {
	BasicFilters,
	BooleanFilter,
	ExistsFilter,
	HasValueFilter,
	IdsFilter,
	NotExistsFilter,
	QueryFilters
} from './Filters.d';
export type { Highlight } from './Highlight.d';
export type {
	SortDirection,
	SortDirectionAscending,
	SortDirectionDescending,
	SortDSLExpression,
	SortExpression,
	SortField,
	SortStatement
} from './Sort.d';
export type {
	SortDirectionAscendingCaseInsensitive,
	SortDirectionCaseInsensitive,
	SortDirectionDescendingCaseInsensitive,
	SortExpressionCaseInsensitive,
	SortStatementCaseInsensitive
} from './SortCaseInsensitive.d';

export interface NodeQueryParams<
	AggregationKeys extends undefined|string = undefined
> {
	/**
	* Start index (used for paging).
	*/
	start?: number;

	/**
	* Number of contents to fetch.
	*/
	count?: number;

	/**
	* Query expression.
	*/
	query?: string;

	/**
	* Query filters
	*/
	filters?: BasicFilters | BooleanFilter;

	/**
	* Sorting expression.
	*/
	sort?: string;

	/**
	* Aggregations expression.
	*/
	aggregations?: AggregationKeys extends undefined
		? {}
		: AggregationKeys extends string
			? Record<AggregationKeys, Aggregation>
			: never

	/**
	* Highlighting config
	*/
	highlight?: Highlight;

	/**
	* Return score calculation explanation.
	*/
	explain?: boolean;
}

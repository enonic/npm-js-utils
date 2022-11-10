import type {QueryDSL} from './Dsl.d';
import type {Highlight} from './Highlight.d';

import type {
	Aggregation,
	Filter,
	MaxAggregation,
	MinAggregation,
	NumericRangeAggregation,
} from '/lib/xp/node'
export type {
	Aggregation,
	DateHistogramAggregation,
	DateRangeAggregation,
	GeoDistanceAggregation,
	MaxAggregation,
	MinAggregation,
	StatsAggregation,
	TermsAggregation,
	ValueCountAggregation
} from '/lib/xp/node'

//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility)
//──────────────────────────────────────────────────────────────────────────────
export type MaxAggregationParams = MaxAggregation['max']
export type MinAggregationParams = MinAggregation['min']
export type RangeAggregationParams = NumericRangeAggregation['range']
export type {
	AggregationForGraphQLSchemaQueryArgsInputType,
	Aggregations,
	AggregationsResponse,
	AggregationsResponseBucket,
	AggregationsResponseEntry,
	AggregationType,
	DateHistogramAggregationParams,
	DateRangeAggregationParams,
	GeoDistanceAggregationParams,
	RangeAggregation,
	StatsAggregationParams,
	TermsAggregationParams,
	ValueCountAggregationParams
} from './Aggregation.d'
//──────────────────────────────────────────────────────────────────────────────
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
export type {
	Highlight,
	HighlightResult
} from './Highlight.d';
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

export type NodeQueryParams<
	AggregationKeys extends undefined|string = undefined
> = {
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
	query? :QueryDSL | string;

	/**
	* Query filters
	*/
	filters?: Filter

	/**
	* Sorting expression.
	*/
	sort?: string;

	/**
	* Aggregations expression.
	*/
	aggregations ?:AggregationKeys extends undefined
		? {} // eslint-disable-line @typescript-eslint/ban-types
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

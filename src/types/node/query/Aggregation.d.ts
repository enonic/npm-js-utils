import type {
	Aggregation,
	AggregationsResult,
	DateBucket,
	DateHistogramAggregation,
	DateRangeAggregation,
	GeoDistanceAggregation,
	MaxAggregation,
	MinAggregation,
	NumericBucket,
	NumericRangeAggregation,
	StatsAggregation,
	TermsAggregation,
	ValueCountAggregation
} from '/lib/xp/node';
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
} from '/lib/xp/node';

//──────────────────────────────────────────────────────────────────────────────
// Params (backwards compatibility)
//──────────────────────────────────────────────────────────────────────────────

export type DateHistogramAggregationParams = DateHistogramAggregation['dateHistogram']

export type DateRangeAggregationParams = DateRangeAggregation['dateRange']

export type GeoDistanceAggregationParams = GeoDistanceAggregation['geoDistance']

export type StatsAggregationParams = StatsAggregation['stats']

export type TermsAggregationParams = TermsAggregation['terms']

export type ValueCountAggregationParams = ValueCountAggregation['count']

//──────────────────────────────────────────────────────────────────────────────
// Enonic-XP Multirepo/Repo Connection Query Aggregations Parameter Aggregation Type Names
//──────────────────────────────────────────────────────────────────────────────
export type AggregationType = 'count'
	|'dateHistogram'
	|'dateRange'
	|'geoDistance'
	|'max'
	|'min'
	|'range'
	|'stats'
	|'terms'

//──────────────────────────────────────────────────────────────────────────────
// GraphQL
//──────────────────────────────────────────────────────────────────────────────
// GraphQL Schema -> Query -> Args -> Input Type -> Array<...>
export type AggregationForGraphQLSchemaQueryArgsInputType = {
	name :string
	count ?:ValueCountAggregation['count']
	dateHistogram ?:DateHistogramAggregation['dateHistogram']
	dateRange ?:DateRangeAggregation['dateRange']
	geoDistance ?:GeoDistanceAggregation['geoDistance']
	max ?:MaxAggregation['max']
	min ?:MinAggregation['min']
	range ?:NumericRangeAggregation['range']
	stats ?:StatsAggregation['stats']
	terms ?:TermsAggregation['terms']
	subAggregations ?:Array<AggregationForGraphQLSchemaQueryArgsInputType>
}

//──────────────────────────────────────────────────────────────────────────────
// Aggregation types (backwards compatibility)
//──────────────────────────────────────────────────────────────────────────────
export type RangeAggregation = NumericRangeAggregation


//──────────────────────────────────────────────────────────────────────────────
// Enonic-XP Multirepo/Repo Connection Query Aggregations Parameter
//──────────────────────────────────────────────────────────────────────────────
export type Aggregations<
	AggregationKeys extends undefined|string = undefined
> = AggregationKeys extends undefined
	? {} // eslint-disable-line @typescript-eslint/ban-types
	: AggregationKeys extends string
		? Record<AggregationKeys, Aggregation>
		: never

//──────────────────────────────────────────────────────────────────────────────
// Enonic-XP Multirepo/Repo Connection Query Result Aggregations Property
//──────────────────────────────────────────────────────────────────────────────

export type AggregationsResponseBucket = DateBucket | NumericBucket

export type AggregationsResponseEntry = AggregationsResult

export type AggregationsResponse<
	AggregationKeys extends undefined|string = undefined
> = AggregationKeys extends undefined
	? {} // eslint-disable-line @typescript-eslint/ban-types
	: AggregationKeys extends string
		? Record<AggregationKeys, AggregationsResult>
		/*? {
			[AggregationKey in AggregationKeys]: AggregationsResult
		}*/
		: never

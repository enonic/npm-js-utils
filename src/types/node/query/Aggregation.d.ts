//──────────────────────────────────────────────────────────────────────────────
// Params
//──────────────────────────────────────────────────────────────────────────────

export type DateHistogramAggregationParams = {
	field :string
	interval :string
	minDocCount :number
	format :string
}

export type DateRangeAggregationParams = {
	field :string
	format :string
	ranges :Array<{
		from ?:string
		to ?:string
	}>
}

export type GeoDistanceAggregationParams = {
	field :string
	ranges ?:Array<{
		from ?:number
		to ?:number
	}>
	range ?:{
		from :number
		to :number
	}
	unit :string
	origin :{
		lat :string
		lon :string
	}
}

type MaxAggregationParams = {
	field :string
}

type MinAggregationParams = {
	field :string
}

type RangeAggregationParams = {
	field :string
	ranges ?:Array<{
		from ?:number
		to ?:number
	}>
	range ?:{
		from :number
		to :number
	}
}

export type StatsAggregationParams = {
	// Required
	field :string
	// Optional
	order ?:string // Default to ?
	size ?:number // Default to ?
}

export type TermsAggregationParams = {
	// Required
	field :string
	// Optional
	minDocCount ?:number
	order ?:string // Default to '_term ASC'
	size ?:number // Default to 10
}

export type ValueCountAggregationParams = {
	field :string
}

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
	count ?:ValueCountAggregationParams
	dateHistogram ?:DateHistogramAggregationParams
	dateRange ?:DateRangeAggregationParams
	geoDistance ?:GeoDistanceAggregationParams
	max ?:MaxAggregationParams
	min ?:MinAggregationParams
	range ?:RangeAggregationParams
	stats ?:StatsAggregationParams
	terms ?:TermsAggregationParams
	subAggregations ?:Array<AggregationForGraphQLSchemaQueryArgsInputType>
}

//──────────────────────────────────────────────────────────────────────────────
// Aggregation types
//──────────────────────────────────────────────────────────────────────────────

export type DateHistogramAggregation = {
	dateHistogram :DateHistogramAggregationParams
	aggregations ?: {
		[subaggregation :string]: Aggregation
	}
}

export type DateRangeAggregation = {
	dateRange: DateRangeAggregationParams
	aggregations ?: {
		[subaggregation :string]: Aggregation
	}
}

export type GeoDistanceAggregation = {
	geoDistance :GeoDistanceAggregationParams
	aggregations ?:{
		[subaggregation :string]: Aggregation
	}
}

export type RangeAggregation = {
	range :RangeAggregationParams
	aggregations ?: {
		[subaggregation :string] :Aggregation
	}
}

export type StatsAggregation = {
	stats :StatsAggregationParams
	aggregations ?:{
		[subaggregation :string] :Aggregation
	}
}

export type TermsAggregation = {
	terms :TermsAggregationParams
	aggregations ?:{
		[subaggregation :string] :Aggregation
	}
}

/**
* @since 7.7.0
*/
export type MinAggregation = {
	min :MinAggregationParams
	aggregations ?:{
		[subaggregation :string] :Aggregation
	}
}

/**
* @since 7.7.0
*/
export type MaxAggregation = {
	max :MaxAggregationParams
	aggregations ?:{
		[subaggregation :string] :Aggregation
	}
}

/**
* @since 7.7.0
*/
export type ValueCountAggregation = {
	count :ValueCountAggregationParams
	aggregations ?:{
		[subaggregation :string] :Aggregation
	}
}

//──────────────────────────────────────────────────────────────────────────────
// Enonic-XP Multirepo/Repo Connection Query Aggregations Parameter
//──────────────────────────────────────────────────────────────────────────────

export type Aggregation =
	| TermsAggregation
	| StatsAggregation
	| RangeAggregation
	| GeoDistanceAggregation
	| DateRangeAggregation
	| DateHistogramAggregation
	| MinAggregation
	| MaxAggregation
	| ValueCountAggregation


export type Aggregations<
	AggregationKeys extends undefined|string = undefined
> = AggregationKeys extends undefined
	? {}
	: AggregationKeys extends string
		? Record<AggregationKeys, Aggregation>
		: never

//──────────────────────────────────────────────────────────────────────────────
// Enonic-XP Multirepo/Repo Connection Query Result Aggregations Property
//──────────────────────────────────────────────────────────────────────────────

export type AggregationsResponseBucket = {
	docCount :number
	key :string
	from ?:number | string
	to ?:number | string

	[key2 :string] :any // sub aggregations
}

export type AggregationsResponseEntry = {
	buckets :Array<AggregationsResponseBucket>

	// Max, Min, Value Count
	value ?:number

	// Stats
	avg ?:number
	count ?:number
	max ?:number
	min ?:number
	sum ?:number
}

export type AggregationsResponse<
	AggregationKeys extends undefined|string = undefined
> = AggregationKeys extends undefined
	? {}
	: AggregationKeys extends string
		? Record<AggregationKeys, AggregationsResponseEntry>
		/*? {
			[AggregationKey in AggregationKeys]: AggregationsResponseEntry
		}*/
		: never

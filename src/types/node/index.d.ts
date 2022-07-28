import type {
	RepoConnection,
	Source
} from './repoConnection.d';
import type {
	MultiRepoConnection,
	MultiRepoConnectParams
} from './multiRepoConnection.d';


export type { NodeCreateParams } from './create.d';
export type { NodeGetParams } from './get.d';
export type {
	GetActiveVersionParamObject,
	GetActiveVersionResponse,
	GetActiveVersionResponseObject
} from './getActiveVersion.d';
export type {
	IndexConfig,
	IndexConfigEntry,
	IndexConfigTemplates
} from './IndexConfig.d';
export type { NodeModifyParams } from './modify.d';
export type {
	SourceWithPrincipals,
	MultiRepoConnection,
	MultiRepoConnectParams,
	MultiRepoNodeQueryHit,
	MultiRepoNodeQueryResponse
} from './multiRepoConnection.d';
export type {
	RepoNode,
	RepoNodeWithData
} from './node.d';
export type {
	Aggregation,
	AggregationForGraphQLSchemaQueryArgsInputType,
	Aggregations,
	AggregationsResponse,
	AggregationsResponseBucket,
	AggregationsResponseEntry,
	AggregationType,
	AnalysedIndexType,
	BasicFilters,
	BooleanFilter,
	CompoundExpression,
	CompoundExpressionBoolean,
	DateHistogramAggregation,
	DateHistogramAggregationParams,
	DateRangeAggregation,
	DateRangeAggregationParams,
	ExistsFilter,
	GeoDistanceAggregation,
	GeoDistanceAggregationParams,
	HasValueFilter,
	Highlight,
	HighlightResult,
	IdsFilter,
	MaxAggregation,
	MaxAggregationParams,
	MinAggregation,
	MinAggregationParams,
	NodeQueryParams,
	NotExistsFilter,
	QueryDSL,
	QueryExpression,
	QueryExpressionFulltext,
	QueryExpressionNgram,
	QueryExpressionStemmed,
	QueryFilters,
	RangeAggregation,
	RangeAggregationParams,
	SortDirection,
	SortDirectionAscending,
	SortDirectionAscendingCaseInsensitive,
	SortDirectionDescending,
	SortDirectionDescendingCaseInsensitive,
	SortDirectionCaseInsensitive,
	SortDSLExpression,
	SortExpression,
	SortExpressionCaseInsensitive,
	SortField,
	SortStatement,
	SortStatementCaseInsensitive,
	StatsAggregation,
	StatsAggregationParams,
	TermsAggregation,
	TermsAggregationParams,
	ValueCountAggregation,
	ValueCountAggregationParams
} from './query/index.d';
export type {
	NodeQueryHit,
	NodeQueryResponse,
	RepoConnection,
	Source
} from './repoConnection.d';


export type NodeLibrary = {
	/**
	* Creates a connection to a repository with a given branch and authentication info.
	*/
	connect(params: Source): RepoConnection;

	multiRepoConnect(params: MultiRepoConnectParams): MultiRepoConnection;
}

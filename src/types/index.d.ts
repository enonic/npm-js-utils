import type {
	ArrayBufferConstructor,
	ArrayConstructor,
	BooleanConstructor,
	ErrorConstructor,
	DateConstructor,
	FunctionConstructor,
	IArguments,
	JSON,
	Math,
	NumberConstructor,
	ObjectConstructor,
	RegExpConstructor,
	StringConstructor,
} from 'typescript/lib/lib.es5';

export type { App } from './App.d';
export type {
	Permission,
	PermissionsParams,
	PrincipalKey,
	PrincipalKeyGroup,
	PrincipalKeyRole,
	PrincipalKeySystem,
	PrincipalKeyUser
} from './Auth';
export type {
	EventLib,
	EventTypeApplication,
	EventTypeTaskFinished,
	EventTypeTaskRemoved,
	EventTypeTaskUpdated,
	EventTypesCustom,
	EventTypesTask,
	EventTypes,
	Event,
	CustomEvent,
	ApplicationEvent,
	TaskEvent
} from './Event.d'
export type {
	GeoPointArray,
	GeoPointFunction,
	GeoPointString
} from './GeoPoint.d';
export type { Log } from './Log.d';
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
	GetActiveVersionParamObject,
	GetActiveVersionResponse,
	GetActiveVersionResponseObject,
	HasValueFilter,
	Highlight,
	IdsFilter,
	IndexConfig,
	IndexConfigEntry,
	IndexConfigTemplates,
	MaxAggregation,
	MaxAggregationParams,
	MinAggregation,
	MinAggregationParams,
	MultiRepoConnection,
	MultiRepoConnectParams,
	MultiRepoNodeQueryHit,
	MultiRepoNodeQueryResponse,
	NodeCreateParams,
	NodeGetParams,
	NodeLibrary,
 	NodeModifyParams,
	NodeQueryHit,
 	NodeQueryParams,
 	NodeQueryResponse,
	NotExistsFilter,
	QueryDSL,
	QueryExpression,
	QueryExpressionFulltext,
	QueryExpressionNgram,
	QueryExpressionStemmed,
	QueryFilters,
	RangeAggregation,
	RangeAggregationParams,
	RepoConnection,
	RepoNode,
	RepoNodeWithData,
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
	Source,
	SourceWithPrincipals,
	StatsAggregation,
	StatsAggregationParams,
	TermsAggregation,
	TermsAggregationParams,
	ValueCountAggregation,
	ValueCountAggregationParams
} from './node/index.d';
export type {
	BranchConfig,
	CreateBranchParams,
	CreateRepoParams,
	ElasticSearchIndexSettings,
	IndexDefinition,
	RepoLib,
	RepositoryConfig,
	RepositorySettings
} from './Repo.d';
export type {
	Portal
} from './Portal.d';
export type {
	AnyString,
	OptionalSpace
} from './String.d';
export type {
	AnyObject,
	OneOrMore
} from './Utility.d';
export type {
	Vhost
} from './Vhost.d';

declare global {
	// Without noLib: true TypeScript will include es2015 which doesn't match Nashorn.
	declare let Array: ArrayConstructor;
	declare let ArrayBuffer: ArrayBufferConstructor;
	declare let Function: FunctionConstructor;
	declare let Boolean: BooleanConstructor;
	declare let DataView: DataViewConstructor;
	declare let Date: DateConstructor;
	declare let Error: ErrorConstructor;
	declare let EvalError: EvalErrorConstructor;
	declare let Float32Array: Float32ArrayConstructor;
	declare let Float64Array: Float64ArrayConstructor;
	declare let IArguments: IArguments;
	declare let Infinity: number;
	declare let Int16Array: Int16ArrayConstructor;
	declare let Int32Array: Int32ArrayConstructor;
	declare let Int8Array: Int8ArrayConstructor;
	declare let JSON: JSON;
	declare let Math: Math;
	declare let NaN: number;
	declare let Number: NumberConstructor;
	declare let Object: ObjectConstructor;
	declare let RangeError: RangeErrorConstructor;
	declare let ReferenceError: ReferenceErrorConstructor;
	declare let RegExp: RegExpConstructor;
	declare let String: StringConstructor;
	declare let SyntaxError: SyntaxErrorConstructor;
	declare let TypeError: TypeErrorConstructor;
	declare let Uint16Array: Uint16ArrayConstructor;
	declare let Uint32Array: Uint32ArrayConstructor;
	declare let Uint8Array: Uint8ArrayConstructor;
	declare let Uint8ClampedArray: Uint8ClampedArrayConstructor;
	declare let URIError: URIErrorConstructor;
}

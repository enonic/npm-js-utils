import type {
	ConnectParams,
	NodeQueryResult,
	NodeQueryResultHit,
	RepoConnection,
} from '/lib/xp/node';
import type {AggregationsResponse} from './query/aggregation.d';

export type {RepoConnection} from '/lib/xp/node';


//──────────────────────────────────────────────────────────────────────────────
// Extensions on @enonic-types
//──────────────────────────────────────────────────────────────────────────────
export type RepoReadConnection = {
	commit: never
	create: never
	delete: never
	diff: RepoConnection['diff']
	exists: RepoConnection['exists']
	findChildren: RepoConnection['findChildren']
	findVersions: RepoConnection['findVersions']
	get: RepoConnection['get']
	getActiveVersion: RepoConnection['getActiveVersion']
	getBinary: RepoConnection['getBinary']
	getCommit: RepoConnection['getCommit']
	modify: never
	move: never
	push: never
	query: RepoConnection['get']
	refresh: never
	setActiveVersion: never
	setRootPermissions: never
	setChildOrder: never
}
export type RepoWriteConnection = RepoConnection;

//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility // TODO Remove in 1.0?
//──────────────────────────────────────────────────────────────────────────────
export type Source = ConnectParams

export type NodeQueryHit = NodeQueryResultHit

export type NodeQueryResponse<
	AggregationKeys extends undefined|string = undefined
> = {
	total: NodeQueryResult['total']
	count: NodeQueryResult['count']
	hits: NodeQueryResult['hits']
	aggregations: AggregationsResponse<AggregationKeys>
	suggestions?: NodeQueryResult['suggestions']
}

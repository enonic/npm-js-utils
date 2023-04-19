import type { PrincipalKey } from '../Auth';
import type {
	NodeQueryHit,
	NodeQueryResponse,
	Source
} from './repoConnection';
import type { NodeQueryParams } from './query';


// Multi repo connect requires principles to be present for sources
export type SourceWithPrincipals = Omit<Source, "principals"> & {
	principals: Array<PrincipalKey>;
};

export type MultiRepoConnectParams = {
	sources: Array<SourceWithPrincipals>;
}

export type MultiRepoNodeQueryHit = NodeQueryHit & {
	repoId: string;
	branch: string;
}

export type MultiRepoNodeQueryResponse<
	AggregationKeys extends undefined|string = undefined
> = Omit<
	NodeQueryResponse<AggregationKeys>,
	"hits"
> & {
	hits: Array<MultiRepoNodeQueryHit>;
};

export type MultiRepoConnection = {
	query<
		AggregationKeys extends undefined|string = undefined
	>(
		params: NodeQueryParams<AggregationKeys>
	): MultiRepoNodeQueryResponse<AggregationKeys>;
}

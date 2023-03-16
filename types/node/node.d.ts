import type {
	Node,
	NodeIndexConfigParams,
} from '/lib/xp/node';


export type RepoNode = Omit<Node,'_indexConfig'> & {
	_indexConfig: NodeIndexConfigParams;
}

export type RepoNodeWithData<Data = Record<string, unknown>> = RepoNode & Data

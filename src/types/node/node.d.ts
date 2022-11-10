import type {Node} from '/lib/xp/node';
import type {IndexConfig} from './indexConfig.d';


export type RepoNode = Omit<Node,'_indexConfig'> & {
	_indexConfig: IndexConfig;
}

export type RepoNodeWithData<Data = Record<string, unknown>> = RepoNode & Data

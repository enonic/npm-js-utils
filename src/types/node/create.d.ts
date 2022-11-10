import {CreateNodeParams} from '/lib/xp/node';
import type {IndexConfig} from './indexConfig.d'; // TODO https://github.com/enonic/xp/pull/9860


export type NodeCreateParams<NodeData = unknown> = Omit<CreateNodeParams<NodeData>,'_indexConfig'> & {
	_indexConfig?: IndexConfig;
}

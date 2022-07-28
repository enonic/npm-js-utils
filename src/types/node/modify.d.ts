import type { RepoNodeWithData } from './node.d';


export type NodeModifyParams/*<NodeData>*/ = {
	/**
	* Path or ID of the node
	*/
	key: string;

	/**
	* Editor callback function
	*/
	//editor: (node: NodeData & RepoNode) => NodeData & RepoNode;
	editor: (node: RepoNodeWithData) => RepoNodeWithData;
}

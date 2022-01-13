import type {
	MockNode,
	MockNodeCreateParam,
	MockNodeModifyParam
} from './node.d';

import {
	enonify,
	flatten
} from '../';


interface Nodes {
	[key :string] :MockNode
}


export class Branch {
	private _nodes :Nodes = {};

	constructor() {}

	createNode({
		//_childOrder,
		_id, // Not possible in Enonic XP, useful here for testing
		_indexConfig = {
			default: {
				decideByType: false,
				enabled: true,
				nGram: false,
				fulltext: false,
				includeInAllText: false,
				path: false,
				indexValueProcessors: [],
				languages: []
    		},
			configs: []
		},
		//_inheritsPermissions,
		//_manualOrderValue,
		_name = _id,
		//_parentPath,
		//_permissions,
		...rest
	} :MockNodeCreateParam) :MockNode {
		if (this._nodes.hasOwnProperty(_id as string)) {
			throw new Error(`createNode: node with _id:${_id} already exist!`);
		}
		const node :MockNode = {
			_id,
			_indexConfig,
			_name,
			...(enonify(rest) as Object)
		} as MockNode;
		this._nodes[_id] = node;
		return node;
	}

	getNode(...keys :string[]) :MockNode | MockNode[] {
		// TODO support key as _path
		if (!keys.length) {
			return [];
		}
		const flattenedKeys :string[] = flatten(keys) as string[];
		const nodes :MockNode[] = flattenedKeys.map(k => this._nodes[k]) as MockNode[];
		return nodes.length > 1
			? nodes //as MockNode[]
			: nodes[0] as MockNode;
	}

	modifyNode({
		key,
		editor
	} :MockNodeModifyParam) :MockNode {
		const node :MockNode = this.getNode(key) as MockNode;
		return editor(node);
	}
} // class Branch

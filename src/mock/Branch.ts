import type {
	MockNode,
	MockNodeCreateParam,
	MockNodeModifyParam
} from './node.d';

import {
	enonify,
	flatten,
	lpad
} from '../';


interface Nodes {
	[key :string] :MockNode
}

const DEFAULT_INDEX_CONFIG = {
	default: {
		decideByType: true,
		enabled: true,
		nGram: false,
		fulltext: false,
		includeInAllText: false,
		path: false,
		indexValueProcessors: [],
		languages: []
	},
	configs: []
};

export class Branch {
	static generateInstantString() {
		return new Date().toISOString();
	}

	private _highest_id :number = 1;
	private _nodes :Nodes = {
		'00000000-0000-0000-0000-000000000000': {
			_childOrder: '_ts DESC',
			_id: '00000000-0000-0000-0000-000000000000',
			_indexConfig: DEFAULT_INDEX_CONFIG,
			_inheritsPermissions: false,
			_name: '',
			_nodeType: 'default',
			_path: '',
			_permissions: [{
				principal: 'role:system.admin',
				allow: [
					'READ',
					'CREATE',
					'MODIFY',
					'DELETE',
					'PUBLISH',
					'READ_PERMISSIONS',
					'WRITE_PERMISSIONS'
				],
				deny: []
    		}],
			_state: 'DEFAULT',
			_ts: Branch.generateInstantString(),
			_versionKey: '00000000-0000-4000-8000-000000000001'
		}
	};

	constructor() {}

	private generateId() :string {
		this._highest_id += 1;
		return `00000000-0000-4000-8000-${lpad(this._highest_id,11,'0')}`;
	}

	createNode({
		//_childOrder,
		_id, // avoid it ending up in rest
		_indexConfig = DEFAULT_INDEX_CONFIG,
		//_inheritsPermissions,
		//_manualOrderValue,
		_name,
		_nodeType = 'default',
		//_parentPath,
		//_permissions,
		_state, // avoid it ending up in rest
		_ts, // avoid it ending up in rest
		_versionKey, // avoid it ending up in rest
		...rest
	} :MockNodeCreateParam) :MockNode {
		//if (rest.hasOwnProperty('_id')) { delete rest._id; }
		//if (rest.hasOwnProperty('_versionKey')) { delete rest._versionKey; }
		_id = this.generateId();
		_versionKey = this.generateId();
		if (!_name) { _name = _id; }
		_ts = Branch.generateInstantString();

		if (this._nodes.hasOwnProperty(_id as string)) {
			throw new Error(`createNode: node with _id:${_id} already exist!`);
		}
		const node :MockNode = {
			_id,
			_indexConfig,
			_name,
			_nodeType,
			_state: 'DEFAULT',
			_ts,
			_versionKey,
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

	query() {
		const ids = Object.keys(this._nodes);
		const total = ids.length;
		return {
			count: total,
			hits: ids.map(id => ({
				id,
				score: 1
			})),
			total
		};
	}
} // class Branch

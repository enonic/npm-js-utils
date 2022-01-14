import type { Log } from './globals.d'
import type { RepoNodeWithData } from './node/node.d';
import type { NodeCreateParams } from './node/create.d';
import type { NodeModifyParams } from './node/modify.d';
import type { NodeQueryParams } from './node/query';
import type { NodeQueryResponse } from './node/repoConnection.d';
import type { Repo } from './Repo';

import {
	enonify,
	flatten,
	lpad
} from '../';


interface Nodes {
	[key :string] :RepoNodeWithData
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
	private _repo :Repo;
	readonly log :Log;

	constructor({
		repo
	} :{
		repo :Repo
	}) {
		//console.debug('repo.constructor.name',repo.constructor.name);
		this._repo = repo;
		this.log = this._repo.log;
		//this.log.debug('in Branch constructor');
	}

	private generateId() :string {
		this._highest_id += 1;
		return `00000000-0000-4000-8000-${lpad(this._highest_id,11,'0')}`;
	}

	createNode({
		//_childOrder,
		//_id, // avoid it ending up in rest
		_indexConfig = DEFAULT_INDEX_CONFIG,
		//_inheritsPermissions,
		//_manualOrderValue,
		_name,
		_nodeType = 'default',
		//_parentPath,
		//_permissions,
		//_state, // avoid it ending up in rest
		//_ts, // avoid it ending up in rest
		//_versionKey, // avoid it ending up in rest
		...rest
	} :NodeCreateParams) :RepoNodeWithData {
		//if (rest.hasOwnProperty('_id')) { delete rest._id; }
		//if (rest.hasOwnProperty('_versionKey')) { delete rest._versionKey; }
		const _id = this.generateId();
		const _versionKey = this.generateId();
		if (!_name) { _name = _id; }
		const _ts = Branch.generateInstantString();

		if (this._nodes.hasOwnProperty(_id as string)) {
			throw new Error(`createNode: node with _id:${_id} already exist!`);
		}
		const node :RepoNodeWithData = {
			_id,
			_indexConfig,
			_name,
			_nodeType,
			_state: 'DEFAULT',
			_ts,
			_versionKey,
			...(enonify(rest) as Object)
		} as RepoNodeWithData;
		this._nodes[_id] = node;
		return node;
	}

	getNode(...keys :string[]) :RepoNodeWithData | RepoNodeWithData[] {
		// TODO support key as _path
		if (!keys.length) {
			return [];
		}
		const flattenedKeys :string[] = flatten(keys) as string[];
		const nodes :RepoNodeWithData[] = flattenedKeys.map(k => this._nodes[k]) as RepoNodeWithData[];
		return nodes.length > 1
			? nodes //as RepoNodeWithData[]
			: nodes[0] as RepoNodeWithData;
	}

	modifyNode({
		key,
		editor
	} :NodeModifyParams) :RepoNodeWithData {
		const node :RepoNodeWithData = this.getNode(key) as RepoNodeWithData;
		return editor(node);
	}

	//@ts-ignore
	query({
		aggregations,
		count,
		explain,
		filters,
		highlight,
		query,
		sort,
		start
	} :NodeQueryParams) :NodeQueryResponse {
		/*this.log.debug('param:%s', {
			aggregations,
			count,
			explain,
			filters,
			highlight,
			query,
			sort,
			start
		});*/
		const ids = Object.keys(this._nodes);
		const total = ids.length;
		return {
			aggregations: {},
			count: total,
			hits: ids.map(id => ({
				id,
				score: 1
			})),
			total
		};
	}
} // class Branch

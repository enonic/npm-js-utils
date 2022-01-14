import type {Log} from './globals.d'
import type {RepositorySettings} from './repo/index.d';
import type {JavaBridge} from './JavaBridge';

import {Branch} from './Branch';


interface Branches {
	[key :string] :Branch
}


export class Repo {
	private _id :string;
	private _branches :Branches;
	private _javaBridge :JavaBridge;
	//rootChildOrder
	//rootPermissions
	private _settings :RepositorySettings;
	readonly log :Log;

	constructor({
		id,
		javaBridge,
		settings = {}
	} :{
		id :string
		javaBridge :JavaBridge
		settings? :RepositorySettings
	}) {
		//console.debug('javaBridge.constructor.name',javaBridge.constructor.name);
		this._id = id;
		this._javaBridge = javaBridge;
		this.log = this._javaBridge.log;
		//this.log.debug('in Repo constructor');
		this._settings = settings;
		this._branches = {
			'master': new Branch({
				repo: this
			})
		};
	}

	get() {
		return {
			id: this._id,
			branches: Object.keys(this._branches),
			settings: this._settings
		};
	}

	getBranch(branchId :string) :Branch {
		const branchObj = this._branches[branchId];
		if (!branchObj) {
			throw new Error(`getBranch: No branch with branchId:${branchId}`);
		}
		return branchObj;
	}
} // class Repo

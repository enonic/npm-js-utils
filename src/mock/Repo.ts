import type {RepositorySettings} from './repo.d';


import {Branch} from './Branch';


interface Branches {
	[key :string] :Branch
}


export class Repo {
	private _id :string;
	private _branches :Branches = {
		'master': new Branch() // This is where the nodes exist
	};
	//rootChildOrder
	//rootPermissions
	private _settings :RepositorySettings;

	constructor({
		id,
		settings = {}
	} :{
		id :string
		settings? :RepositorySettings
	}) {
		this._id = id;
		//this._branches = ['master'];
		this._settings = settings;
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

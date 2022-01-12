import type {
	CreateRepoParams,
	RepositoryConfig
} from './repo.d';

import type {
	MockRepoConnection,
	Source
} from './node.d';


import {Connection} from './Connection';
import {Repo} from './Repo';


export interface Repos {
	[key :string] :Repo
}


export class JavaBridge {
	private _repos :Repos = {};

	constructor() {
		//this._repos = {} as Repos;
	}

	createRepo({
		id,
		//rootChildOrder,
		//rootPermissions,
		settings
	} :CreateRepoParams) :RepositoryConfig {
		const repo = new Repo({
			id,
			//rootPermissions,
			settings
		});
		this._repos[id] = repo;
		return repo.get();
	}

	connect({
		repoId,
		branch//,
		//user,
		//principals
	} :Source) :MockRepoConnection {
		const repo = this._repos[repoId];
		if (!repo) {
			throw new Error(`connect: No repo with id:${repoId}!`);
		}
		const branchObj = repo.getBranch(branch);
		const connection = new Connection({branch: branchObj});
		return connection;
	}
} // class JavaBridge

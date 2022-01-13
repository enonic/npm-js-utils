import type {
	App,
	Log
} from './globals.d'
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
	readonly app :App;
	readonly log :Log = {
		debug: (...params) => { console.debug(...params) },
		error: (...params) => { console.error(...params) },
		info: (...params) => { console.info(...params) },
		warning: (...params) => { console.warn(...params) }
	};

	constructor({
		app,
		log
	} :{
		app :App
		log? :Log
	}) {
		this.app = app;
		if (log) {
			this.log = log;
		}
	} // constructor

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

import type {
	App,
	Log
} from './globals.d'
import type {
	RepoConnection,
	Source
} from './node/repoConnection.d';
import type {
	CreateRepoParams,
	RepoLib,
	RepositoryConfig
} from './repo/index.d';
import type {
	ValueLib
} from './value/index.d';

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
	readonly repo :RepoLib = {
		create: ({
			id,
			//rootChildOrder,
			//rootPermissions,
			settings
		} :CreateRepoParams) :RepositoryConfig => {
			const repo = new Repo({
				id,
				javaBridge: this,
				//rootPermissions,
				settings
			});
			this._repos[id] = repo;
			return repo.get();
		},
		get: (repoId :string) :RepositoryConfig => {
			const repo = this._repos[repoId];
			if (!repo) {
				throw new Error(`getRepo: No repo with id:${repoId}`);
			}
			return repo.get();
		},
		list: () :RepositoryConfig[] => {
			return Object.keys(this._repos).map(repoId => this.repo.get(repoId));
		}
	}
	readonly value :ValueLib = {
		geoPoint: (v) => v,
		geoPointString: (v) => v,
		instant: (v) => v,
		localDate: (v) => v,
		localDateTime: (v) => v,
		localTime: (v) => v,
		reference: (v) => v
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
		//this.log.debug('in JavaBridge constructor');
	} // constructor

	connect({
		repoId,
		branch//,
		//user,
		//principals
	} :Source) :RepoConnection {
		const repo = this._repos[repoId];
		if (!repo) {
			throw new Error(`connect: No repo with id:${repoId}!`);
		}
		const branchObj = repo.getBranch(branch);
		const connection = new Connection({
			branch: branchObj,
			javaBridge: this
		});
		return connection;
	}
} // class JavaBridge

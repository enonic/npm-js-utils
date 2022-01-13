import type {Branch} from './Branch';
import type {
	MockNode,
	MockNodeCreateParam,
	MockNodeModifyParam,
	MockRepoConnection
} from './node.d';


export class Connection implements MockRepoConnection {
	private _branch :Branch;

	constructor({
		branch
	} :{
		branch :Branch
	}) {
		this._branch = branch;
	}

	create(param :MockNodeCreateParam) :MockNodeCreateParam {
		return this._branch.createNode(param);
	}

	get(...keys :string[]) :MockNode | MockNode[] {
		return this._branch.getNode(...keys);
	}

	modify({
		key,
		editor
	} :MockNodeModifyParam) :MockNode {
		return this._branch.modifyNode({
			key,
			editor
		});
	}

	query(/*object*/) {
		return this._branch.query(/*object*/);
	}
} // class Connection

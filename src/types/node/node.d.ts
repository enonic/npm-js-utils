import type { PermissionsParams } from '../auth';
import type { IndexConfig } from './indexConfig.d';


export type RepoNode = {
	_childOrder :string;
	_id :string;
	_indexConfig :IndexConfig;
	_inheritsPermissions :boolean;
	_name :string;
	_nodeType :string;
	_path :string;
	_permissions :Array<PermissionsParams>;
	_state :string;
	_versionKey :string;
	_ts :string;
}

export type RepoNodeWithData = RepoNode & {
	[key :string] :unknown
}

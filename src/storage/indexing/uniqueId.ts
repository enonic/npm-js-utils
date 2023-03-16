import {DOT_SIGN} from '../../constants';


interface UniqueIdParams {
	repoId :string;
	branchId? :string;
	nodeId :string;
	versionKey? :string;
}


export function uniqueId({
	repoId,
	branchId,
	nodeId,
	versionKey
} :UniqueIdParams) :string {
	if(!repoId) { throw new TypeError('uniqueId: Missing required named parameter repoId!'); }
	if(!nodeId) { throw new TypeError('uniqueId: Missing required named parameter nodeId!'); }
	const parts = [repoId];
	if(branchId) { parts.push(branchId); }
	parts.push(nodeId);
	if(versionKey) { parts.push(versionKey); }
	return parts.join(DOT_SIGN);
}

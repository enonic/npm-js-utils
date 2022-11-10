import type {
	GetActiveVersionParams,
	// NodeVersion
} from '/lib/xp/node';

export type GetActiveVersionParamObject = GetActiveVersionParams

export type GetActiveVersionResponseObject = {
	versionId :string
	nodeId :string
	nodePath :string
	timestamp :string
	//commitId: string; // TODO Found in /lib/xp/node but maybe it should be optional
}

export type GetActiveVersionResponse = GetActiveVersionResponseObject | null;

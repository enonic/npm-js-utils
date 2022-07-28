export type GetActiveVersionParamObject = {
	key :string
}

export type GetActiveVersionResponseObject = {
	versionId :string
	nodeId :string
	nodePath :string
	timestamp :string
}

export type GetActiveVersionResponse = GetActiveVersionResponseObject | null;

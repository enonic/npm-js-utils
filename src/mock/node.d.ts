interface LooseObject {
	[key :string] :unknown
}

import type {
	PermissionsParams,
	PrincipalKey
} from './auth.d';


export interface Source {
	repoId: string;
	branch: string;
	user?: {
		login: string;
		idProvider?: string;
	};
	principals?: Array<PrincipalKey>;
}

export interface IndexConfigEntry {
	/**
	* If true, indexing is done based on valueType, according to the table above. I.e. numeric values are indexed as
	* both string and numeric.
	*/
	decideByType: boolean;

	/**
	* If false, indexing will be disabled for the affected properties
	*/
	enabled: boolean;

	/**
	* Values are stored as 'ngram'
	*/
	nGram: boolean;

	/**
	* Values are stored as 'ngram', 'analyzed' and also added to the _allText system property
	*/
	fulltext: boolean;

	/**
	* Affected values will be added to the _allText property
	*/
	includeInAllText: boolean;

	/**
	* Values are stored as 'path' type and applicable for the pathMatch-function
	*/
	path: boolean;

	indexValueProcessors: Array<any>;
	languages: Array<any>;
}

export type IndexConfigTemplates = "none" | "byType" | "fulltext" | "path" | "minimal";

export interface IndexConfig {
	default: IndexConfigEntry | IndexConfigTemplates;
	configs?: ReadonlyArray<{
		path: string;
		config: IndexConfigEntry | IndexConfigTemplates;
	}>;
}

export interface NodeCreateParams {
	/**
	* Name of content.
	*/
	_name?: string;

	/**
	* Path to place content under.
	*/
	_parentPath?: string;

	/**
	* How the document should be indexed. A default value "byType" will be set if no value specified.
	*/
	_indexConfig?: IndexConfig;

	/**
	* The access control list for the node. By default the creator will have full access
	*/
	_permissions?: ReadonlyArray<PermissionsParams>;

	/**
	* true if the permissions should be inherited from the node parent. Default is false.
	*/
	_inheritsPermissions?: boolean;

	/**
	* Value used to order document when ordering by parent and child-order is set to manual
	*/
	_manualOrderValue?: number;

	/**
	* Default ordering of children when doing getChildren if no order is given in query
	*/
	_childOrder?: string;
}

export interface RepoNode {
	_childOrder: string;
	_id: string;
	_indexConfig: IndexConfig;
	_inheritsPermissions: boolean;
	_name :string;
	_nodeType: string;
	_permissions: Array<PermissionsParams>;
	_state: string;
}

export interface NodeModifyParams<NodeData> {
	/**
	* Path or ID of the node
	*/
	key: string;

	/**
	* Editor callback function
	*/
	editor: (node: NodeData & RepoNode) => NodeData & RepoNode;
}

export interface MockNodeCreateRequiredParams {
	_id :string;
}

export interface MockNodeCreateOptionalParams {
	_name? :string;
}

export type MockNodeCreateParam = MockNodeCreateRequiredParams & MockNodeCreateOptionalParams & LooseObject;

export type MockNode = RepoNode & LooseObject;

//export type MockNodeGetParams = string | string[];

export interface MockNodeModifyParam {
	key :string
	//editor: (node: NodeData & RepoNode) => NodeData & RepoNode;
	editor :(node :MockNode) => MockNode
}

export interface MockRepoConnection {
	//create<NodeData>(a: NodeData & NodeCreateParams): NodeData & RepoNode;
	create(a: MockNodeCreateParam) :MockNodeCreateParam;

	//get(key :string) :MockNode;
	//get(keys :string[]) :MockNode | MockNode[];
	get(...keys :string[]) :MockNode | MockNode[];

	//modify<NodeData>(params: NodeModifyParams<NodeData>): NodeData & RepoNode;
	modify(param :MockNodeModifyParam) :MockNode
}

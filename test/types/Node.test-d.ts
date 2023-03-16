import type {
	CommonNodeProperties,
	CreateNodeParams,
	Node,
	// NodeConfigEntry,
	// NodeIndexConfigParams,
	NodeIndexConfigTemplates,
	NodePropertiesOnCreate,
	NodePropertiesOnModify,
	NodePropertiesOnRead,
	ModifiedNode,
	ModifyNodeParams,
	// RepoConnection,
} from '/lib/xp/node';


import {
	expectAssignable,
	// expectError,
	expectNotAssignable,
	// expectType,
	// printType,
} from 'tsd';

const commonNodeProperties = {
	_childOrder: 'whatever',
	_inheritsPermissions: true,
	_name: 'whatever',
	_nodeType: 'whatever',
	_path: 'whatever',
	_permissions: [],
	_state: 'whatever',
	_ts: 'whatever',
	_versionKey: 'whatever',
};
// printType(commonNodeProperties);
expectAssignable<CommonNodeProperties>(commonNodeProperties);

const nodeConfigEntry = {
	decideByType: true,
	enabled: true,
	nGram: true,
	fulltext: true,
	includeInAllText: true,
	path: true,
	indexValueProcessors: ['whatever'],
	languages: ['whatever'],
}

const indexConfigWithTemplates = {
	analyzer: 'whatever',
	default: 'byType' as NodeIndexConfigTemplates, // TODO: Why do I have to type cast here?
	configs: [{
		path: 'whatever',
		config: nodeConfigEntry
	}]
}

const indexConfigWithoutTemplates = {
	analyzer: 'whatever',
	default: nodeConfigEntry,
	configs: [{
		path: 'whatever',
		config: nodeConfigEntry
	}]
}

const createNodeProperties = {
	...commonNodeProperties,
	_indexConfig: indexConfigWithTemplates,
	_parentPath: 'whatever',
}

const modifyNodeProperties = {
	...commonNodeProperties,
	_id: 'whatever',
	_indexConfig: indexConfigWithTemplates,
}

const readNodeProperties = {
	...commonNodeProperties,
	_id: 'whatever',
	_indexConfig: indexConfigWithoutTemplates,
}

expectAssignable<NodePropertiesOnCreate>(createNodeProperties);
expectAssignable<CreateNodeParams>(createNodeProperties);
expectNotAssignable<NodePropertiesOnModify>(createNodeProperties);
expectNotAssignable<NodePropertiesOnRead>(createNodeProperties);

expectAssignable<NodePropertiesOnModify>(modifyNodeProperties);
expectAssignable<NodePropertiesOnCreate>(modifyNodeProperties); // because _parentPath is optional
expectAssignable<CreateNodeParams>(modifyNodeProperties); // because _parentPath is optional
expectNotAssignable<NodePropertiesOnRead>(modifyNodeProperties);

expectAssignable<NodePropertiesOnRead>(readNodeProperties);
expectAssignable<NodePropertiesOnCreate>(readNodeProperties); // because _parentPath is optional
expectAssignable<CreateNodeParams>(readNodeProperties); // because _parentPath is optional
expectAssignable<NodePropertiesOnModify>(readNodeProperties); // because NodeConfigEntry is allowed inside NodeIndexConfigParams

type MyData = {
	myString: string
}

const createMyNode = {
	...createNodeProperties,
 	myString: 'whatever'
}
const createMyNodeWithoutMyString = {
	...createNodeProperties,
}
const getMyNode = {
	...readNodeProperties,
 	myString: 'whatever'
}
const getMyNodeWithoutMyString = {
	...readNodeProperties,
}
const modifyMyNode = {
	...modifyNodeProperties,
 	myString: 'whatever'
}
const modifyMyNodeWithoutMystring = {
	...modifyNodeProperties,
}

// expectAssignable<Node<MyData>>(createMyNode);
expectAssignable<CreateNodeParams<MyData>>(createMyNode);
expectNotAssignable<CreateNodeParams<MyData>>(createMyNodeWithoutMyString);

expectAssignable<Node<MyData>>(getMyNode);
expectNotAssignable<Node<MyData>>(getMyNodeWithoutMyString);

expectAssignable<ModifiedNode<MyData>>(modifyMyNode);
expectNotAssignable<ModifiedNode<MyData>>(modifyMyNodeWithoutMystring);

expectNotAssignable<Node<MyData>>(modifyMyNode);
expectAssignable<ModifyNodeParams<MyData>>({
	key: 'whatever',
	editor: () => {
		return modifyMyNode;
	}
});
expectNotAssignable<ModifyNodeParams<MyData>>({
	key: 'whatever',
	editor: () => {
		return modifyMyNodeWithoutMystring;
	}
});
expectAssignable<ModifyNodeParams<MyData>>({ // because NodeConfigEntry is allowed inside NodeIndexConfigParams
	key: 'whatever',
	editor: () => {
		return getMyNode;
	}
});
expectNotAssignable<ModifyNodeParams<MyData>>({
	key: 'whatever',
	editor: () => {
		return createMyNode;
	}
});

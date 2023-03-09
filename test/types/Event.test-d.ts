import type {
	ApplicationEvent,
	ApplicationClusterEvent,
	CustomEvent,
	NodeCreatedEvent,
	NodeEvent,
	NodeDeletedEvent,
	NodeUpdatedEvent,
	TaskEvent,
} from '@enonic/js-utils/types/Event.d';


import {expectType} from 'tsd';


//──────────────────────────────────────────────────────────────────────────────
// Types
//──────────────────────────────────────────────────────────────────────────────
type MyCustomEvent = CustomEvent<
	'custom.com.enonic.app.explorer.init.complete',
	Record<PropertyKey,never>
>;

//──────────────────────────────────────────────────────────────────────────────
// Custom events
//──────────────────────────────────────────────────────────────────────────────
const customEvent: MyCustomEvent = {
	type: "custom.com.enonic.app.explorer.init.complete",
	timestamp: 1669107987733,
	localOrigin: true,
	distributed: true,
	data: {}
}
expectType<MyCustomEvent>(customEvent);

//──────────────────────────────────────────────────────────────────────────────
// Task events
//──────────────────────────────────────────────────────────────────────────────
const taskEvent: TaskEvent = {
	"type": "task.finished",
	"timestamp": 1669107988072,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"description": "Init",
		"id": "a1bad5d7-3e0a-4cd7-9a44-bb295fcaf2ef",
		"name": "com.enonic.app.explorer:init",
		"state": "FINISHED",
		"progress": {
			"info": "Initialization complete :)",
			"current": 6,
			"total": 6
		},
		"application": "com.enonic.app.explorer",
		"user": "user:system:anonymous",
		"startTime": "2022-11-22T09:06:22.952248Z"
	}
}
expectType<TaskEvent>(taskEvent);

//──────────────────────────────────────────────────────────────────────────────
// Application cluster events
//──────────────────────────────────────────────────────────────────────────────
const applicationStopClusterEvent :ApplicationClusterEvent = {
	"type": "application.cluster",
	"timestamp": 1669108463746,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"eventType": "stop",
		"key": "com.enonic.app.contentstudio"
	}
}
expectType<ApplicationClusterEvent>(applicationStopClusterEvent);

const applicationStateClusterEvent :ApplicationClusterEvent ={
	"type": "application.cluster",
	"timestamp": 1669108463999,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"eventType": "state",
		"key": "com.enonic.app.contentstudio",
		"started": false
	}
}
expectType<ApplicationClusterEvent>(applicationStateClusterEvent);


const applicationStartClusterEvent :ApplicationClusterEvent = {
	"type": "application.cluster",
	"timestamp": 1669109414088,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"eventType": "start",
		"key": "com.enonic.app.contentstudio"
	}
}
expectType<ApplicationClusterEvent>(applicationStartClusterEvent);

const applicationUninstallClusterEvent :ApplicationClusterEvent = {
	"type": "application.cluster",
	"timestamp": 1669109841473,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"eventType": "uninstall",
		"key": "com.enonic.app.livetrace"
	}
}
expectType<ApplicationClusterEvent>(applicationUninstallClusterEvent);

const applicationUninstalledClusterEvent :ApplicationClusterEvent = {
	"type": "application.cluster",
	"timestamp": 1669109841526,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"eventType": "uninstalled",
		"key": "com.enonic.app.livetrace"
	}
}
expectType<ApplicationClusterEvent>(applicationUninstalledClusterEvent);

//──────────────────────────────────────────────────────────────────────────────
// Application events
//──────────────────────────────────────────────────────────────────────────────
const applicationStoppedEvent :ApplicationEvent = {
	"type": "application",
	"timestamp": 1669108463791,
	"localOrigin": true,
	"distributed": false,
	"data": {
		"applicationKey": "com.enonic.app.contentstudio",
		"systemApplication": false,
		"eventType": "STOPPED"
	}
}
expectType<ApplicationEvent>(applicationStoppedEvent);

const applicationStartedEvent :ApplicationEvent = {
	"type": "application",
	"timestamp": 1669109414158,
	"localOrigin": true,
	"distributed": false,
	"data": {
		"applicationKey": "com.enonic.app.contentstudio",
		"systemApplication": false,
		"eventType": "STARTED"
	}
}
expectType<ApplicationEvent>(applicationStartedEvent);

const applicationUninstalledEvent :ApplicationEvent = {
	"type": "application",
	"timestamp": 1669109841496,
	"localOrigin": true,
	"distributed": false,
	"data": {
		"applicationKey": "com.enonic.app.livetrace",
		"systemApplication": false,
		"eventType": "UNINSTALLED"
	}
}
expectType<ApplicationEvent>(applicationUninstalledEvent);

//──────────────────────────────────────────────────────────────────────────────
// Node events
//──────────────────────────────────────────────────────────────────────────────
const nodeUpdatedEvent: NodeUpdatedEvent = {
	"type": "node.updated",
	"timestamp": 1669108463998,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"nodes": [{
			"id": "a8bfc272-e3c1-4cfc-94e9-3ae909f24868",
			"path": "/applications/com.enonic.app.contentstudio",
			"branch": "master",
			"repo": "system-repo"
		}]
	}
}
expectType<NodeEvent<'node.updated'>>(nodeUpdatedEvent);
expectType<NodeUpdatedEvent>(nodeUpdatedEvent);


const nodeCreatedEvent: NodeCreatedEvent = {
	"type": "node.created",
	"timestamp": 1669108464019,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"nodes": [{
			"id": "1b5e7340-2d2f-475e-b2c9-83de40a5bdfa",
			"path": "/1b5e7340-2d2f-475e-b2c9-83de40a5bdfa",
			"branch": "master",
			"repo": "system.auditlog"
		}]
	}
}
// expectType<NodeEvent>(nodeCreatedEvent); // Parameter type NodeEvent<EventTypesNode> is declared too wide for argument type NodeCreatedEvent.
expectType<NodeEvent<'node.created'>>(nodeCreatedEvent);
expectType<NodeCreatedEvent>(nodeCreatedEvent);

const nodeDeletedEvent: NodeDeletedEvent = {
	"type": "node.deleted",
	"timestamp": 1669109841526,
	"localOrigin": true,
	"distributed": true,
	"data": {
		"nodes": [{
			"id": "fd826042-5701-4e67-a2c4-b12ca46a9c57",
			"path": "/applications/com.enonic.app.livetrace",
			"branch": "master",
			"repo": "system-repo"
		}]
	}
}
expectType<NodeEvent<'node.deleted'>>(nodeDeletedEvent);
expectType<NodeDeletedEvent>(nodeDeletedEvent);

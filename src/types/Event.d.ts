import type {
	EnonicEvent,
	EnonicEventData,
	ListenerParams,
	SendParams,
	listener,
	send
} from '/lib/xp/event';
import type {AnyObject} from './Utility.d';

//──────────────────────────────────────────────────────────────────────────────
// EventTypes
//──────────────────────────────────────────────────────────────────────────────
export type EventTypeApplication = 'application';
export type EventTypeApplicationCluster = 'application.cluster';

export type EventTypeNodeCreated = 'node.created';
export type EventTypeNodeDeleted = 'node.deleted';
export type EventTypeNodeUpdated = 'node.updated';

export type EventTypeTaskFinished = 'task.finished';
export type EventTypeTaskRemoved = 'task.removed';
export type EventTypeTaskUpdated = 'task.updated';

export type EventTypesApplication =
	| EventTypeApplication
	| EventTypeApplicationCluster;

export type EventTypesCustom = `custom.${string}`;

export type EventTypesNode =
	| EventTypeNodeCreated
	| EventTypeNodeDeleted
	| EventTypeNodeUpdated;

export type EventTypesTask =
	| EventTypeTaskFinished
	| EventTypeTaskRemoved
	| EventTypeTaskUpdated;

export type EventTypes =
	| EventTypesApplication
	| EventTypesNode
	| EventTypesTask
	| EventTypesCustom;

//──────────────────────────────────────────────────────────────────────────────
// Event (with generics)
//──────────────────────────────────────────────────────────────────────────────
export type Event<
	Type extends EventTypes = EventTypes,
	Data extends object = EnonicEventData
	> = {
	data: Data
	distributed: EnonicEvent['distributed']
	localOrigin: EnonicEvent['localOrigin']
	timestamp: EnonicEvent['timestamp']
	type: Type
}

//──────────────────────────────────────────────────────────────────────────────
// Generic events
//──────────────────────────────────────────────────────────────────────────────
export type CustomEvent<
	Type extends EventTypesCustom,
	Data extends AnyObject
> = Event<Type,Data>

export type GenericEvent = Event<EventTypes,AnyObject>

export interface NodeEventData {
	nodes: {
		id: string
		path: string
		branch:
			| 'master'
			| 'draft'
			| string
		repo:
			| 'system-repo'
			| string
	}[]
}

export type NodeEvent<
	Type extends EventTypesNode = EventTypesNode
> = Event<Type,NodeEventData>

//──────────────────────────────────────────────────────────────────────────────
// Specific Events
//──────────────────────────────────────────────────────────────────────────────
export type ApplicationClusterEvent = Event<EventTypeApplicationCluster,{
	key :string
	eventType :
		| 'start'
		| 'state'
		| 'stop'
		| 'uninstall'
		| 'uninstalled'
		// | string // Not certain I have covered all eventTypes
	started?: boolean
}>


export interface ApplicationEventData {
	applicationKey :string
	systemApplication :boolean
	eventType:
		| 'INSTALLED'
		| 'STARTED'
		| 'STOPPED'
		| 'UNINSTALLED'
		// | string // Not certain I have covered all eventTypes
}

export type ApplicationEvent = Event<EventTypeApplication,ApplicationEventData>;

export type NodeCreatedEvent = NodeEvent<EventTypeNodeCreated>;
export type NodeDeletedEvent = NodeEvent<EventTypeNodeDeleted>;
export type NodeUpdatedEvent = NodeEvent<EventTypeNodeUpdated>;

export interface TaskEventData {
	application :string
	description :string
	id :string
	name :string
	progress :{
		current :number
		info :string
		total :number
	}
	startTime :string // Date
	state :string //'FINISHED'
	user :string
}

export type TaskEvent = Event<EventTypesTask,TaskEventData>

//──────────────────────────────────────────────────────────────────────────────
//export type Events = ApplicationEvent|TaskEvent|CustomEvent//|GenericEvent

export type EventLib = {
	listener :<
		CallbackEvent extends Event
	>(params :{
		type: ListenerParams['type']
		localOnly: ListenerParams['localOnly']
		callback :(event :CallbackEvent) => void
	}) => ReturnType<typeof listener>
	send :<Data extends object>(params :{
		type: SendParams['type']
		distributed: SendParams['distributed']
		data ?:Data
	}) => ReturnType<typeof send>
}

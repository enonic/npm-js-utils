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
export type EventTypeTaskFinished = 'task.finished';
export type EventTypeTaskRemoved = 'task.removed';
export type EventTypeTaskUpdated = 'task.updated';

export type EventTypesCustom = `custom.${string}`;
export type EventTypesTask = EventTypeTaskFinished | EventTypeTaskRemoved | EventTypeTaskUpdated;

export type EventTypes = EventTypeApplication | EventTypesTask | EventTypesCustom;

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

//──────────────────────────────────────────────────────────────────────────────
// Specific Events
//──────────────────────────────────────────────────────────────────────────────
export type ApplicationEvent = Event<EventTypeApplication,{
	applicationKey :string
	systemApplication :boolean
	eventType :string //'INSTALLED'|'STARTED'
}>

export type TaskEvent = Event<EventTypesTask,{
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
}>

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

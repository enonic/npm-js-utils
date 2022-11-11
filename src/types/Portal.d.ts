import type {
	Component as ComponentFromEnonicTypes,
	Content as ContentFromEnonicTypes,
	Region
} from '@enonic-types/core';

export namespace Portal {
	export type ComponentPath = `/${string}`
	export type ComponentType = ComponentFromEnonicTypes['type']
	export type ComponentDescriptor = `${string}:${string}`

	export type Component<
		Config extends object = object,
		Regions extends Record<string, Region> = Record<string, Region>
	> = {
		config: Config
		descriptor: ComponentDescriptor
		path: ComponentPath
		type: ComponentFromEnonicTypes['type']
		regions?: Regions; // TODO This is not optional yet in @enonic-types/core
	}

	export interface Page<
		Config extends object = object,
		Regions extends Record<string, Region> = Record<string, Region>
	> extends Component {
		config: Config
		descriptor :ComponentDescriptor
		path :ComponentPath,
		type :'page'
		regions?: Regions;
	}

	// This old type is not compatible with the new type from @enonic-types/core
	// export type Content<
	// 	Data = Record<string,unknown>,
	// 	PageConfig = Record<string,unknown>,
	// 	X = Record<string,unknown>
	// > = {
	// 	_id :string
	// 	_name :string
	// 	_path :string
	// 	attachments :unknown // TODO
	// 	childOrder :string
	// 	creator :string
	// 	createdTime :string
	// 	data :Data
	// 	displayName :string
	// 	hasChildren :boolean
	// 	modifier :string
	// 	modifiedTime :string
	// 	language :string
	// 	owner :string
	// 	page :Page<PageConfig>
	// 	publish :unknown // TODO
	// 	type :string
	// 	x :X
	// 	valid :boolean
	// 	workflow :{
	// 		state :'IN_PROGRESS'|string
	// 		checks :unknown // TODO
	// 	}
	// }
	export type Content = ContentFromEnonicTypes
}

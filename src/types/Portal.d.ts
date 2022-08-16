export namespace Portal {
	export type ComponentPath = `/${string}`
	export type ComponentType = 'part'|'layout'|'page'
	export type ComponentDescriptor = `${string}:${string}`

	export type Component<Config> = {
		config: Config
		descriptor :ComponentDescriptor
		path :ComponentPath
		type :ComponentType
	}

	export type Page<Config> = {
		config: Config
		descriptor :ComponentDescriptor
		path :ComponentPath,
		type :'page'
	}

	export type Content<
		Data = Record<string,unknown>,
		PageConfig = Record<string,unknown>,
		X = Record<string,unknown>
	> = {
		_id :string
		_name :string
		_path :string
		attachments :unknown // TODO
		childOrder :string
		creator :string
		createdTime :string
		data :Data
		displayName :string
		hasChildren :boolean
		modifier :string
		modifiedTime :string
		language :string
		owner :string
		page :Page<PageConfig>
		publish :unknown // TODO
		type :string
		x :X
		valid :boolean
		workflow :{
			state :'IN_PROGRESS'|string
			checks :unknown // TODO
		}
	}
}

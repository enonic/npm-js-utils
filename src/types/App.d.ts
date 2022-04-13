interface AppConfigObject {
	[key :string] :unknown
}

export interface App {
	config :AppConfigObject
	name :string
	version :string
}

type AppConfigObject = {
	[key :string] :unknown
}

export type App = {
	config :AppConfigObject
	name :string
	version :string
}

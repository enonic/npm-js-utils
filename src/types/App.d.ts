//import type {app} from '@enonic-types/global'; // Not an export, just a global


type AppConfigObject = Record<string, string | undefined>

export type App = {
	config :AppConfigObject
	name :string
	version :string
}

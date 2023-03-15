//import type {log} from '@enonic-types/global'; // Not an export, just a global

export type Log = {
	debug(message :string, ...args :unknown[]) :void
	error(message :string, ...args :unknown[]) :void
	info(message :string, ...args :unknown[]) :void
	warning(message :string, ...args :unknown[]) :void
}

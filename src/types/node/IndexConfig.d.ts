import {
	NodeConfigEntry,
	// NodeIndexConfig // Doesn't include IndexConfigTemplates
} from '/lib/xp/node';


//──────────────────────────────────────────────────────────────────────────────
// Extensions on core types
//──────────────────────────────────────────────────────────────────────────────
// TODO these types might be covered by https://github.com/enonic/xp/pull/9860
export type IndexConfigTemplates = "none" | "byType" | "fulltext" | "path" | "minimal"

export type IndexConfig = {
	analyzer: string;
	default :Partial<NodeConfigEntry> | IndexConfigTemplates
	configs ?:Array<{
		path :string
		config :Partial<NodeConfigEntry> | IndexConfigTemplates
	}>
}

//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility: TODO should be removed in 1.0?
//──────────────────────────────────────────────────────────────────────────────
export type IndexConfigEntry = NodeConfigEntry;
//export type IndexConfig = NodeIndexConfig; // Doesn't include IndexConfigTemplates

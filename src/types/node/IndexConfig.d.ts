import {
	NodeConfigEntry,
	NodeIndexConfigParams,
	NodeIndexConfigTemplates,
} from '/lib/xp/node';


//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility: TODO should be removed in 1.0?
//──────────────────────────────────────────────────────────────────────────────
export type IndexConfigTemplates = NodeIndexConfigTemplates
export type IndexConfig = NodeIndexConfigParams
export type IndexConfigEntry = NodeConfigEntry;

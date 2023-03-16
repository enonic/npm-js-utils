import type {
	GetActiveVersionParams,
	NodeVersion
} from '/lib/xp/node';


//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility: TODO should be removed in 1.0?
//──────────────────────────────────────────────────────────────────────────────
export type GetActiveVersionParamObject = GetActiveVersionParams

export type GetActiveVersionResponseObject = NodeVersion

export type GetActiveVersionResponse = GetActiveVersionResponseObject | null;

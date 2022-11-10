import type {
	ExistsFilter,
	Filter,
	HasValueFilter,
	IdsFilter,
	NotExistsFilter
} from '/lib/xp/node';
export type {
	BooleanFilter,
	ExistsFilter,
	HasValueFilter,
	IdsFilter,
	NotExistsFilter
} from '/lib/xp/node';


//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility
//──────────────────────────────────────────────────────────────────────────────
export type HasValueFilterParams = HasValueFilter['hasValue']

export type BasicFilters = Filter

export type QueryFilters = Filter

//──────────────────────────────────────────────────────────────────────────
// Guillotine // TODO: Use types from Guillotine when they are available
//──────────────────────────────────────────────────────────────────────────
export namespace Guillotine {
	export type HasStringValueFilterParams = {
		field :string
		stringValues :string[]
	}

	export type HasValueFilter = {
		hasValue :HasStringValueFilterParams// |...
	}

	export type BasicFilters = ExistsFilter | NotExistsFilter | HasValueFilter | IdsFilter

	export type BooleanFilter = {
		boolean :{
			must? :BasicFilters | Array<BasicFilters>
			mustNot? :BasicFilters | Array<BasicFilters>
			should? :BasicFilters | Array<BasicFilters>
		}
	}
} // namespace Guillotine

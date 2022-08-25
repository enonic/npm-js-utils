export type ExistsFilter = {
	exists :{
		field :string
	}
}

export type NotExistsFilter = {
	notExists :{
		field :string
	}
}

export type HasValueFilterParams = {
	field :string
	values :Array<unknown>
}

export type HasValueFilter = {
	hasValue :HasValueFilterParams
}

export type IdsFilter = {
	ids :{
		values :Array<string>
	}
}

export type BasicFilters = ExistsFilter | NotExistsFilter | HasValueFilter | IdsFilter

export type BooleanFilter = {
	boolean :{
		must? :BasicFilters | Array<BasicFilters>
		mustNot? :BasicFilters | Array<BasicFilters>
		should? :BasicFilters | Array<BasicFilters>
	}
}

export type QueryFilters = {
	boolean? :{
		must? :BasicFilters | Array<BasicFilters>
		mustNot? :BasicFilters | Array<BasicFilters>
		should? :BasicFilters | Array<BasicFilters>
	}
	exists? :{
		field :string
	}
	notExists? :{
		field :string
	}
	hasValue? :HasValueFilterParams
	ids? :{
		values :Array<string>
	}
}

//──────────────────────────────────────────────────────────────────────────
// Guillotine
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

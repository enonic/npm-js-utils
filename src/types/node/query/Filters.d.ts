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

export type HasValueFilter = {
	hasValue :{
		field :string
		values :Array<unknown>
	}
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
	hasValue? :{
		field :string
		values :Array<unknown>
	}
	ids? :{
		values :Array<string>
	}
}

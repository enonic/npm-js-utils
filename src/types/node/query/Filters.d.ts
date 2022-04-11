export interface ExistsFilter {
	exists :{
		field :string
	}
}

export interface NotExistsFilter {
	notExists :{
		field :string
	}
}

export interface HasValueFilter {
	hasValue :{
		field :string
		values :Array<unknown>
	}
}

export interface IdsFilter {
	ids :{
		values :Array<string>
	}
}

export type BasicFilters = ExistsFilter | NotExistsFilter | HasValueFilter | IdsFilter

export interface BooleanFilter {
	boolean :{
		must? :BasicFilters | Array<BasicFilters>
		mustNot? :BasicFilters | Array<BasicFilters>
		should? :BasicFilters | Array<BasicFilters>
	}
}

export interface QueryFilters {
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

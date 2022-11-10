import type {
	BooleanFilter,
	ExistsFilter,
	Filter,
	HasValueFilter,
	IdsFilter,
	NotExistsFilter
} from '/lib/xp/node';


import {
	FILTER_CLAUSE_MUST,
	FILTER_CLAUSES
} from './constants';


type FilterClause = typeof FILTER_CLAUSES[number];

interface RelaxedBooleanFilter {
  boolean?: {
    must?: Filter | Array<Filter>;
    mustNot?: Filter | Array<Filter>;
    should?: Filter | Array<Filter>;
  };
}

interface addFilterParam {
	clause?: FilterClause,
	filter: ExistsFilter | HasValueFilter | IdsFilter | NotExistsFilter,
	filters?: RelaxedBooleanFilter
}


export function addQueryFilter({
	clause = FILTER_CLAUSE_MUST,
	filter,
	filters: incomingFilters = {}
}: addFilterParam): BooleanFilter {
	const returnedFilters = JSON.parse(JSON.stringify(incomingFilters)); // dereference
	if (!returnedFilters.boolean) { returnedFilters.boolean = {}; }
	if (!returnedFilters.boolean[clause]) {
		returnedFilters.boolean[clause] = filter;
	} else if (Array.isArray(returnedFilters.boolean[clause])) {
		returnedFilters.boolean[clause].push(filter);
	} else {
		returnedFilters.boolean[clause] = [returnedFilters.boolean[clause],filter];
	}
	return returnedFilters;
}

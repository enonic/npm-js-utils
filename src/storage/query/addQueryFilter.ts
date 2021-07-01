import {
	BasicFilters,
	BooleanFilter,
	ExistsFilter,
	HasValueFilter,
	IdsFilter,
	NotExistsFilter
} from 'enonic-types/content';

import {
	FILTER_CLAUSE_MUST,
	FILTER_CLAUSES
} from './constants';

type FilterClause = typeof FILTER_CLAUSES[number];


interface RelaxedBooleanFilter {
  boolean?: {
    must?: BasicFilters | Array<BasicFilters>;
    mustNot?: BasicFilters | Array<BasicFilters>;
    should?: BasicFilters | Array<BasicFilters>;
  };
}

interface addFilterParam {
	clause: FilterClause,
	filter: ExistsFilter | HasValueFilter | IdsFilter | NotExistsFilter,
	filters: RelaxedBooleanFilter
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
	} else {
		returnedFilters.boolean[clause] = [...returnedFilters.boolean[clause],filter];
	}
	return returnedFilters;
}

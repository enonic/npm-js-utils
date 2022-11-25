import type {
	BooleanFilter,
	Filter,
} from '/lib/xp/node';


import {
	FILTER_CLAUSE_MUST,
	FILTER_CLAUSES
} from './constants';
import {
	isBooleanFilter,
	isExistsFilter,
	isHasValueFilter,
	isIdsFilter,
	isNotExistsFilter,
} from './filter';

type FilterClause = typeof FILTER_CLAUSES[number];

// interface RelaxedBooleanFilter {
//   boolean?: BooleanFilter['boolean'];
// }

interface addFilterParam {
	clause?: FilterClause,
	filter: Filter//ExistsFilter | HasValueFilter | IdsFilter | NotExistsFilter,
	filters?: Filter|Filter[] // RelaxedBooleanFilter
}



export function addQueryFilter({
	clause = FILTER_CLAUSE_MUST,
	filter,
	filters: incomingFilters
}: addFilterParam): Filter|Filter[] {
	const returnedFilters: Filter|Filter[] = incomingFilters
		? JSON.parse(JSON.stringify(incomingFilters)) // dereference
		: {} ;
	if (Array.isArray(returnedFilters)) {
		returnedFilters.push(addQueryFilter({
			clause,
			filter,
			// filters: {}
		}) as Filter);
		return returnedFilters;
	}

	if (
		!isExistsFilter(returnedFilters)
		&& !isNotExistsFilter(returnedFilters)
		&& !isHasValueFilter(returnedFilters)
		&& !isIdsFilter(returnedFilters)
	) {
		if (!returnedFilters.boolean) {
			returnedFilters.boolean = {} as BooleanFilter['boolean'];
		}
	}

	if (isBooleanFilter(returnedFilters)) {
		if (!returnedFilters.boolean[clause]) {
			returnedFilters.boolean[clause] = filter;
		} else if (Array.isArray(returnedFilters.boolean[clause])) {
			(returnedFilters.boolean[clause] as Filter[]).push(filter);
		} else {
			returnedFilters.boolean[clause] = [(returnedFilters.boolean[clause] as Filter),filter];
		}
	}
	return returnedFilters;
}

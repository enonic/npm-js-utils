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
	console.debug('incomingFilters',JSON.stringify(returnedFilters, null, 4));
	if (Array.isArray(returnedFilters)) {
		returnedFilters.push(addQueryFilter({
			clause,
			filter,
			// filters: {}
		}) as Filter);
		console.debug('returnedFiltersArray',JSON.stringify(returnedFilters, null, 4));
		return returnedFilters;
	}

	if (
		!isExistsFilter(returnedFilters)
		&& !isNotExistsFilter(returnedFilters)
		&& !isHasValueFilter(returnedFilters)
		&& !isIdsFilter(returnedFilters)
	) {
		console.debug('incomingFilters is not one of exists,notExits,hasValue,ids', JSON.stringify(returnedFilters, null, 4));
		if (!returnedFilters.boolean) {
			returnedFilters.boolean = {} as BooleanFilter['boolean'];
		}
	}

	if (isBooleanFilter(returnedFilters)) {
		console.debug('isBooleanFilter === true', JSON.stringify(returnedFilters, null, 4));
		if (!returnedFilters.boolean[clause]) {
			console.debug(`incomingFilters.boolean.${clause} doesn't exist???`, JSON.stringify(returnedFilters.boolean[clause], null, 4));
			returnedFilters.boolean[clause] = filter;
		} else if (Array.isArray(returnedFilters.boolean[clause])) {
			console.debug(`incomingFilters.boolean.${clause} is an array`);
			(returnedFilters.boolean[clause] as Filter[]).push(filter);
		} else {
			console.debug(`incomingFilters.boolean.${clause} is exists but is not an array`);
			returnedFilters.boolean[clause] = [(returnedFilters.boolean[clause] as Filter),filter];
		}
	}
	console.debug('returnedFilters',JSON.stringify(returnedFilters, null, 4));
	return returnedFilters;
}

import type {
	SortDirectionAscending,
	SortDirectionDescending,
	SortDirection,
	SortStatement
} from './index.d';
import type {SortDirectionCaseInsensitive} from './sort.caseInsensitive.d';


export const ASC :SortDirectionAscending = 'ASC';
export const DESC :SortDirectionDescending = 'DESC';

export const SORT_CREATED :SortStatement = `createdTime ${DESC}`;
export const SORT_DISPLAYNAME :SortStatement = `displayName ${ASC}`;
export const SORT_MANUAL :SortStatement = `_manualordervalue ${DESC}, _timestamp ${DESC}`; // _timestamp: The last change to the content version
export const SORT_MODIFIED :SortStatement = `modifiedTime ${DESC}`;

export function isDirection(s :string) :s is SortDirection {
	return s === ASC || s === DESC;
}

export function isDirectionCaseInsensitive(s :string) :s is SortDirectionCaseInsensitive {
	const u = s.toUpperCase();
	return u === ASC || u === DESC;
}

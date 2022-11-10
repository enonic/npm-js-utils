import type {
	FieldSortDsl,
	SortDirection
} from '/lib/xp/node';
export type {SortDirection} from '/lib/xp/node';

export type SortDirectionAscending = "ASC";
export type SortDirectionDescending = "DESC";

export type SortField = string;
//export type SortExpression = `${SortField}` | `${SortField} ${SortDirection}`; // Collapses to string :(
export type SortExpression = `${SortField} ${SortDirection}`;
export type SortStatement = SortExpression
	| `${SortExpression},${''|' '}${SortExpression}`
	| `${SortExpression},${''|' '}${SortExpression},${''|' '}${SortExpression}`;

export type SortDSLExpression = FieldSortDsl

export type SortDirectionAscending = "ASC";
export type SortDirectionDescending = "DESC";
export type SortDirection = SortDirectionAscending | SortDirectionDescending;

export type SortField = string;
//export type SortExpression = `${SortField}` | `${SortField} ${SortDirection}`; // Collapses to string :(
export type SortExpression = `${SortField} ${SortDirection}`;
export type SortStatement = SortExpression
	| `${SortExpression},${''|' '}${SortExpression}`
	| `${SortExpression},${''|' '}${SortExpression},${''|' '}${SortExpression}`;

export type SortDSLExpression = {
	field :string
	direction? :SortDirection
}

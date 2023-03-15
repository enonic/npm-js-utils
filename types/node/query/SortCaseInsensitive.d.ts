import type {SortField} from './Sort.d';

type CaseInsensitiveA = 'a'|'A';
type CaseInsensitiveC = 'c'|'C';
type CaseInsensitiveD = 'd'|'D';
type CaseInsensitiveE = 'e'|'E';
type CaseInsensitiveS = 's'|'S';

type CaseInsensitiveSC = `${CaseInsensitiveS}${CaseInsensitiveC}`;

export type SortDirectionAscendingCaseInsensitive = `${CaseInsensitiveA}${CaseInsensitiveSC}`;
export type SortDirectionDescendingCaseInsensitive = `${CaseInsensitiveD}${CaseInsensitiveE}${CaseInsensitiveSC}`;

export type SortDirectionCaseInsensitive =
	SortDirectionAscendingCaseInsensitive
	| SortDirectionDescendingCaseInsensitive;

export type SortExpressionCaseInsensitive = `${SortField} ${SortDirectionCaseInsensitive}`;
export type SortStatementCaseInsensitive = SortExpressionCaseInsensitive
	| `${SortExpressionCaseInsensitive},${''|' '}${SortExpressionCaseInsensitive}`
	| `${SortExpressionCaseInsensitive},${''|' '}${SortExpressionCaseInsensitive},${''|' '}${SortExpressionCaseInsensitive}`;

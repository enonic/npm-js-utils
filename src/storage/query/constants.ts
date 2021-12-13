export const FILTER_CLAUSE_MUST = 'must'; // has the type 'must'
export const FILTER_CLAUSE_MUST_NOT = 'mustNot';
export const FILTER_CLAUSE_SHOULD = 'should';

export const FILTER_CLAUSES = [
	FILTER_CLAUSE_MUST,
	FILTER_CLAUSE_MUST_NOT,
	FILTER_CLAUSE_SHOULD
] as const;

export const QUERY_FUNCTION_FULLTEXT = 'fulltext';
export const QUERY_FUNCTION_NGRAM = 'ngram';
export const QUERY_FUNCTION_RANGE = 'range';
export const QUERY_FUNCTION_PATH_MATCH = 'pathMatch';
export const QUERY_FUNCTION_STEMMED = 'stemmed';

export const QUERY_OPERATOR_AND = 'AND';
export const QUERY_OPERATOR_OR = 'OR';

export const QUERY_OPERATORS = [
	QUERY_OPERATOR_AND,
	QUERY_OPERATOR_OR
] as const;

export interface FieldObject {
	readonly boost? :number,
	readonly field :string,
}

type Field = (string | FieldObject);
export type Fields = (Field | Field[]);

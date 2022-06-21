import type {OneOrMore} from '../../Utility.d';

// Base primitive value index of a field (number, string, boolean) or
export type AnalysedIndexType = "time" | "dateTime"

export interface QueryExpressionFulltext {
	fulltext :{
		fields :Array<string>
		operator :string
		query :string
	}
}

export interface QueryExpressionNgram {
	ngram :{
		fields :Array<string>
		operator :string
		query :string
	}
}

export interface QueryExpressionStemmed {
	stemmed :{
		fields :Array<string>
		language :string
		operator :string
		query :string
	}
}

export type QueryExpression = Partial<QueryExpressionFulltext>
	& Partial<QueryExpressionNgram>
	& Partial<QueryExpressionStemmed>;

export interface CompoundExpression {
	must? :OneOrMore<QueryExpression> & CompoundExpression
	mustNot? :OneOrMore<QueryExpression> & CompoundExpression
	should? :OneOrMore<QueryExpression> & CompoundExpression
}

export interface CompoundExpressionBoolean {
	boolean :CompoundExpression;
}

export type QueryDSL = Partial<CompoundExpressionBoolean> & QueryExpression;
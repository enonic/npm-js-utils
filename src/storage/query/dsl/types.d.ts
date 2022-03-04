import type {OneOrMore} from '../../../types.d';


export interface QueryExpressionFulltext {
	fulltext :{
		fields :ReadonlyArray<string>
		operator :string
		query :string
	}
}

export interface QueryExpressionNgram {
	ngram :{
		fields :ReadonlyArray<string>
		operator :string
		query :string
	}
}

export interface QueryExpressionStemmed {
	stemmed :{
		fields :ReadonlyArray<string>
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

export type QueryDSL = CompoundExpressionBoolean & QueryExpression;

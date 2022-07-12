import type {OneOrMore} from '../../Utility.d';

// Base primitive value index of a field (number, string, boolean) or
export type AnalysedIndexType = "time" | "dateTime"

export type QueryExpressionFulltext = {
	fulltext :{
		fields :Array<string>
		operator :string
		query :string
	}
}

export type QueryExpressionIn<ValueType = unknown> = {
	in :{
		field :string
		values :Array<ValueType>
		type ?:string // 'string'|'number'|'boolean'|'time'|'dateTime'
		boost ?:number
	}
}

export type QueryExpressionNgram = {
	ngram :{
		fields :Array<string>
		operator :string
		query :string
	}
}

export type QueryExpressionStemmed = {
	stemmed :{
		fields :Array<string>
		language :string
		operator :string
		query :string
	}
}

export type QueryExpressionTerm<ValueType = unknown> = {
	term :{
		field :string
		value :ValueType
		type ?:string // 'string'|'number'|'boolean'|'time'|'dateTime'
		boost ?:number
	}
}

export type QueryExpression = Partial<QueryExpressionFulltext>
	& Partial<QueryExpressionIn>
	& Partial<QueryExpressionNgram>
	& Partial<QueryExpressionStemmed>
	& Partial<QueryExpressionTerm>;

export type CompoundExpression = {
	must? :OneOrMore<QueryExpression> & CompoundExpression
	mustNot? :OneOrMore<QueryExpression> & CompoundExpression
	should? :OneOrMore<QueryExpression> & CompoundExpression
}

export type CompoundExpressionBoolean = {
	boolean :CompoundExpression;
}

export type QueryDSL = Partial<CompoundExpressionBoolean> & QueryExpression;

import type {
	BooleanDslExpression,
	DslQueryType,
	FulltextDslExpression,
	InDslExpression,
	NgramDslExpression,
	QueryDsl,
	StemmedDslExpression,
	TermDslExpression,
} from '/lib/xp/node';


//──────────────────────────────────────────────────────────────────────────────
// Things not yet found in '/lib/xp/node'
//──────────────────────────────────────────────────────────────────────────────
export type QueryExpressionIn<ValueType = unknown> = {
	in: {
		field: InDslExpression['field']
		values: ValueType[]
		type?: InDslExpression['type']
		boost?: InDslExpression['boost']
	}
}

export type QueryExpressionTerm<ValueType = unknown> = {
	term: {
		field: TermDslExpression['field']
		value :ValueType
		type?: TermDslExpression['type']
		boost?: TermDslExpression['boost']
	}
}

//──────────────────────────────────────────────────────────────────────────────
// Backwards compatibility
//──────────────────────────────────────────────────────────────────────────────
export type AnalysedIndexType = DslQueryType

export type QueryExpressionFulltext = {
	fulltext: FulltextDslExpression
}

export type QueryExpressionNgram = {
	ngram: NgramDslExpression
}

export type QueryExpressionStemmed = {
	stemmed: StemmedDslExpression
}

export type QueryExpression = Partial<QueryExpressionFulltext>
	& Partial<QueryExpressionIn>
	& Partial<QueryExpressionNgram>
	& Partial<QueryExpressionStemmed>
	& Partial<QueryExpressionTerm>;

export type CompoundExpression = BooleanDslExpression

export type CompoundExpressionBoolean = {
	boolean :BooleanDslExpression;
}

export type QueryDSL = QueryDsl

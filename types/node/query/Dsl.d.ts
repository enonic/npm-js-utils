import type {
	BooleanDslExpression,
	DslQueryType,
	FulltextDslExpression as FulltextDslExpression_7_11_1,
	InDslExpression,
	NgramDslExpression as NgramDslExpression_7_11_1,
	QueryDsl,
	StemmedDslExpression as StemmedDslExpression_7_11_1,
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
// TODO: Missing in 7.11.1, fixed but not released yet
//──────────────────────────────────────────────────────────────────────────────
export type NgramDslExpression = NgramDslExpression_7_11_1 & {
	boost?: number
}

export type FulltextDslExpression = FulltextDslExpression_7_11_1 & {
	boost?: number
}

export type StemmedDslExpression = StemmedDslExpression_7_11_1 & {
	boost?: number
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

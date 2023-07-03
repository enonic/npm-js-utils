// Useful when working on specific tests
// import isBooleanDslExpression from '../../../../storage/query/dsl/isBooleanDslExpression';
// import isExistsDslExpression from '../../../../storage/query/dsl/isExistsDslExpression';
// import isFulltextDslExpression from '../../../../storage/query/dsl/isFulltextDslExpression';
// import isInDslExpression from '../../../../storage/query/dsl/isInDslExpression';
// import isLikeDslExpression from '../../../../storage/query/dsl/isLikeDslExpression';
// import isMatchAllDslExpression from '../../../../storage/query/dsl/isMatchAllDslExpression';
// import isNgramDslExpression from '../../../../storage/query/dsl/isNgramDslExpression';
// import isPathMatchDslExpression from '../../../../storage/query/dsl/isPathMatchDslExpression';
// import isQueryDsl from '../../../../storage/query/dsl/isQueryDsl';
// import isRangeDslExpression from '../../../../storage/query/dsl/isRangeDslExpression';
// import isStemmedDslExpression from '../../../../storage/query/dsl/isStemmedDslExpression';
// import isTermDslExpression from '../../../../storage/query/dsl/isTermDslExpression';
import {
	isBooleanDslExpression,
	isExistsDslExpression,
	isFulltextDslExpression,
	isInDslExpression,
	isLikeDslExpression,
	isMatchAllDslExpression,
	isNgramDslExpression,
	isPathMatchDslExpression,
	isQueryDsl,
	isRangeDslExpression,
	isStemmedDslExpression,
	isTermDslExpression,
} from '../../../../index';


import {
	describe,
	expect,
	test as it
} from '@jest/globals';


//──────────────────────────────────────────────────────────────────────────────
// Test data
//──────────────────────────────────────────────────────────────────────────────
const EXISTS_DSL_EXPRESSION = {
	field: 'field',
	boost: 1
};

const FULLTEXT_DSL_EXPRESSION = {
	fields: [
		'field1',
		'field2'
	],
	query: 'query',
	operator: 'AND',
	boost: 1.1
};

const IN_DSL_EXPRESSION = {
	field: 'field',
	values: [
		'value1',
		'value2'
	],
	type: 'time',
	boost: 0.9
};

const LIKE_DSL_EXPRESSION = {
	field: 'field',
	value: 'value',
	type: 'dateTime',
	boost: 1
};

const MATCH_ALL_DSL_EXPRESSION ={
	boost: 1
};

const NGRAM_DSL_EXPRESSION ={
	fields: [
		'field1',
		'field2'
	],
	query: 'query',
	operator: 'OR',
	boost: 1
};

const PATH_MATCH_DSL_EXPRESSION = {
	field: 'field',
	path: 'path',
	minimumMatch: 1,
	boost: 1
};


const RANGE_DSL_EXPRESSION = {
	field: 'field',
	lt: 'lt',
	lte: 'lte',
	gt: 'gt',
	gte: 'gte',
	boost: 1
};

const STEMMED_DSL_EXPRESSION = {
	fields: [
		'field1',
		'field2'
	],
	query: 'query',
	language: 'en',
	operator: 'AND',
	boost: 1
};

const TERM_DSL_EXPRESSION = {
	field: 'field',
	value: 'value',
	type: 'time',
	boost: 1
};

const BOOLEAN_DSL_EXPRESSION = {
	must: [{
		exists: EXISTS_DSL_EXPRESSION
	},{
		fulltext: FULLTEXT_DSL_EXPRESSION
	}],
	mustNot: [{
		in: IN_DSL_EXPRESSION
	},{
		like: LIKE_DSL_EXPRESSION
	}],
	should: [{
		matchAll: MATCH_ALL_DSL_EXPRESSION
	}, {
		ngram: NGRAM_DSL_EXPRESSION
	}, ],
	filter: [{
		pathMatch: PATH_MATCH_DSL_EXPRESSION
	}, {
		range: RANGE_DSL_EXPRESSION
	}, {
		stemmed: STEMMED_DSL_EXPRESSION
	}, {
		term: TERM_DSL_EXPRESSION
	}],
	boost: 1
};

//──────────────────────────────────────────────────────────────────────────────
// Tests
//──────────────────────────────────────────────────────────────────────────────
describe('isBooleanDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isBooleanDslExpression(BOOLEAN_DSL_EXPRESSION)).toBe(true);
		expect(isBooleanDslExpression({
			boolean: {
				must: {
					exists: EXISTS_DSL_EXPRESSION
				},
				mustNot: {
					fulltext: FULLTEXT_DSL_EXPRESSION
				},
				should: {
					in: IN_DSL_EXPRESSION
				},
				filter: {
					like: LIKE_DSL_EXPRESSION
				}
			},
			boost: 1
		})).toBe(true);
		expect(isBooleanDslExpression({
			must: [],
			mustNot: [],
			should: [],
			filter: []
		})).toBe(true);
		expect(isBooleanDslExpression({})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isBooleanDslExpression()).toBe(false)
		expect(isBooleanDslExpression({
			boost: 'Not a number'
		})).toBe(false)
	});
});

describe('isExistsDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isExistsDslExpression(EXISTS_DSL_EXPRESSION)).toBe(true)
		expect(isExistsDslExpression({
			field: 'field',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isExistsDslExpression()).toBe(false)
		expect(isExistsDslExpression({})).toBe(false)
	});
});

describe('isFulltextDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isFulltextDslExpression(FULLTEXT_DSL_EXPRESSION)).toBe(true)
		expect(isFulltextDslExpression({
			fields: [
				'field1',
				'field2'
			],
			query: 'query',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isFulltextDslExpression()).toBe(false)
		expect(isFulltextDslExpression({})).toBe(false)
	});
});

describe('isInDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isInDslExpression(IN_DSL_EXPRESSION)).toBe(true)
		expect(isInDslExpression({
			field: 'field',
			values: [
				'value1',
				'value2'
			],
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isInDslExpression()).toBe(false)
		expect(isInDslExpression({})).toBe(false)
	});
});

describe('isLikeDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isLikeDslExpression(LIKE_DSL_EXPRESSION)).toBe(true)
		expect(isLikeDslExpression({
			field: 'field',
			value: 'value',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isLikeDslExpression()).toBe(false)
		expect(isLikeDslExpression({})).toBe(false)
	});
});

describe('isMatchAllDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isMatchAllDslExpression(MATCH_ALL_DSL_EXPRESSION)).toBe(true)
		expect(isMatchAllDslExpression({})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isMatchAllDslExpression()).toBe(false)
	});
});

describe('isNgramDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isNgramDslExpression(NGRAM_DSL_EXPRESSION)).toBe(true)
		expect(isNgramDslExpression({
			fields: [
				'field1',
				'field2'
			],
			query: 'query',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isNgramDslExpression()).toBe(false)
		expect(isNgramDslExpression({})).toBe(false)
	});
});

describe('isPathMatchDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isPathMatchDslExpression(PATH_MATCH_DSL_EXPRESSION)).toBe(true)
		expect(isPathMatchDslExpression({
			field: 'field',
			path: 'path',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isPathMatchDslExpression()).toBe(false);
		expect(isPathMatchDslExpression({})).toBe(false);
		expect(isPathMatchDslExpression({
			field: 'field',
			path: 'path',
			minimumMatch: 'Not a number',
		})).toBe(false)
		expect(isPathMatchDslExpression({
			field: 'field',
			path: 'path',
			boost: 'Not a number',
		})).toBe(false)
	});
});

describe('isQueryDsl', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isQueryDsl({
			boolean: BOOLEAN_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			exists: EXISTS_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			fulltext: FULLTEXT_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			in: IN_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			like: LIKE_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			matchAll: MATCH_ALL_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			ngram: NGRAM_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			pathMatch: PATH_MATCH_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			range: RANGE_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			stemmed: STEMMED_DSL_EXPRESSION
		})).toBe(true);
		expect(isQueryDsl({
			term: TERM_DSL_EXPRESSION
		})).toBe(true);

	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isQueryDsl()).toBe(false);
		expect(isQueryDsl({})).toBe(false);
	});
});

describe('isRangeDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isRangeDslExpression(RANGE_DSL_EXPRESSION)).toBe(true)
		expect(isRangeDslExpression({
			field: 'field',
			lt: 'lt',
			lte: 'lte',
			gt: 'gt',
			gte: 'gte',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isRangeDslExpression()).toBe(false);
		expect(isRangeDslExpression({})).toBe(false);
		expect(isRangeDslExpression({ // without field
			lt: 'lt',
			lte: 'lte',
			gt: 'gt',
			gte: 'gte',
			boost: 1
		})).toBe(false)
		expect(isRangeDslExpression({ // without lt, lte, gt, gte
			field: 'field',
			boost: 1
		})).toBe(false)
		expect(isRangeDslExpression({ // boost not number
			field: 'field',
			lt: 'lt',
			lte: 'lte',
			gt: 'gt',
			gte: 'gte',
			boost: 'Not a number',
		})).toBe(false)
	});
});

describe('isStemmedDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isStemmedDslExpression(STEMMED_DSL_EXPRESSION)).toBe(true)
		expect(isStemmedDslExpression({
			fields: [
				'field1',
				'field2'
			],
			language: 'en',
			query: 'query',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isStemmedDslExpression()).toBe(false)
		expect(isStemmedDslExpression({})).toBe(false)
	});
});

describe('isTermDslExpression', () => {
	it('returns true when the value has the correct shape', () => {
		expect(isTermDslExpression(TERM_DSL_EXPRESSION)).toBe(true)
		expect(isTermDslExpression({
			field: 'field',
			value: 'value',
		})).toBe(true)
	});
	it('returns false when the value has the wrong shape', () => {
		// @ts-ignore
		expect(isTermDslExpression()).toBe(false)
		expect(isTermDslExpression({})).toBe(false)
	});
});

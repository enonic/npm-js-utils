import {strictEqual} from 'assert';
import {isBooleanFilter} from '@enonic/js-utils';


const AN_EXISTS_FILTER = {
	exists: {
		field: 'required'
	}
}

const A_HAS_VALUE_FILTER = {
	hasValue: {
		field: 'required',
		values: []
	}
}

const AN_IDS_FILTER = {
	ids: {
		values: ['string']
	}
}

const A_NON_EXISTS_FILTER = {
	notExists: {
		field: 'required'
	}
}

const A_BOOLEAN_FILTER = {
	boolean: {
		must: AN_EXISTS_FILTER,
		mustNot: [
			A_HAS_VALUE_FILTER,
			AN_IDS_FILTER
		],
		should: A_NON_EXISTS_FILTER,
	}
}

const A_FILTER_ARRAY = [
	A_BOOLEAN_FILTER,
	AN_EXISTS_FILTER,
	A_HAS_VALUE_FILTER,
	AN_IDS_FILTER,
	A_NON_EXISTS_FILTER,
];


describe('isBooleanFilter', () => {
	it('returns true when boolean is an empty object', () => {
		strictEqual(
			true,
			isBooleanFilter({
				boolean: {}
			})
		)
	});
	it('returns true when must, mustNot and should are a single filter', () => {
		strictEqual(
			true,
			isBooleanFilter({
				boolean: {
					must: AN_EXISTS_FILTER,
					mustNot: A_HAS_VALUE_FILTER,
					should: AN_IDS_FILTER,
				}
			})
		)
	});
	it('returns true when must, mustNot and should are filter arrays', () => {
		strictEqual(
			true,
			isBooleanFilter({
				boolean: {
					must: A_FILTER_ARRAY,
					mustNot: A_FILTER_ARRAY,
					should: A_FILTER_ARRAY,
				}
			})
		)
	});
	it('returns false when boolean not an object', () => {
		strictEqual(
			false,
			isBooleanFilter({
				boolean: null
			})
		)
	});
	it('returns false when boolean is missing', () => {
		strictEqual(
			false,
			isBooleanFilter({})
		)
	});
	it('returns false when params not an object', () => {
		strictEqual(
			false,
			isBooleanFilter(null)
		)
	});
}); // describe isBooleanFilter

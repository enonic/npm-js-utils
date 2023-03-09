import {deepStrictEqual} from 'assert';
import {ngram} from '@enonic/js-utils';


describe('fulltext', () => {
	it('minimal', () => {
		deepStrictEqual(
			"ngram('_allText','searchString')",
			ngram(
				'_allText',
				'searchString'
			)
		)
	});
	it('two fields', () => {
		deepStrictEqual(
			"ngram('title^2,text','searchString','AND')",
			ngram(
				[
					'title^2',
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"aNd"' is not assignable to parameter of type 'DslOperator'.
				'aNd'
			)
		)
	});
	it('two fields with boost', () => {
		deepStrictEqual(
			"ngram('title^2,text','searchString')",
			ngram(
				[
					{
						field: 'title',
						boost: 2
					},
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR'
			)
		)
	});
});

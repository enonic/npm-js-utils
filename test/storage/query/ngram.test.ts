import {deepStrictEqual} from 'assert';
import {ngram} from '../../../src';


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
				'oR'
			)
		)
	});
});

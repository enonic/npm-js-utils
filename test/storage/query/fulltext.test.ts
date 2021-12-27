import {deepStrictEqual} from 'assert';
import {fulltext} from '../../../src';


describe('fulltext', () => {
	it('minimal', () => {
		deepStrictEqual(
			"fulltext('_allText','searchString')",
			fulltext(
				'_allText',
				'searchString'
			)
		)
	});
	it('two fields', () => {
		deepStrictEqual(
			"fulltext('title^2,text','searchString','AND')",
			fulltext(
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
			"fulltext('title^2,text','searchString')",
			fulltext(
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

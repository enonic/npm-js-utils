import {deepStrictEqual} from 'assert';
import {
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	stemmed
} from '../../../dist/esm/index.mjs';


describe('stemmed', () => {
	it('minimal', () => {
		deepStrictEqual(
			"stemmed('_allText','searchString','OR','en')",
			stemmed(
				'_allText',
				'searchString'
			)
		)
	});
	it('two fields', () => {
		deepStrictEqual(
			"stemmed('title^2,text','searchString','AND','no')",
			stemmed(
				[
					'title^2',
					'text'
				],
				'searchString',
				'aNd',
				STEMMING_LANGUAGE_CODE_NORWEGIAN
			)
		)
	});
	it('two fields with boost', () => {
		deepStrictEqual(
			"stemmed('title^2,text','searchString','OR','es')",
			stemmed(
				[
					{
						field: 'title',
						boost: 2
					},
					'text'
				],
				'searchString',
				'oR',
				STEMMING_LANGUAGE_CODE_SPANISH
			)
		)
	});
});

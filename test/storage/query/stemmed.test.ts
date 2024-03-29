import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {
	STEMMING_LANGUAGE_CODE_NORWEGIAN,
	STEMMING_LANGUAGE_CODE_SPANISH,
	stemmed
} from '../../../index';


describe('stemmed', () => {
	test('minimal', () => {
		deepStrictEqual(
			"stemmed('_allText','searchString','OR','en')",
			stemmed(
				'_allText',
				'searchString'
			)
		)
	});
	test('two fields', () => {
		deepStrictEqual(
			"stemmed('title^2,text','searchString','AND','no')",
			stemmed(
				[
					'title^2',
					'text'
				],
				'searchString',
				//@ts-expect-error TS2345: Argument of type '"aNd"' is not assignable to parameter of type 'DslOperator'.
				'aNd',
				STEMMING_LANGUAGE_CODE_NORWEGIAN
			)
		)
	});
	test('two fields with boost', () => {
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
				//@ts-expect-error TS2345: Argument of type '"oR"' is not assignable to parameter of type 'DslOperator'.
				'oR',
				STEMMING_LANGUAGE_CODE_SPANISH
			)
		)
	});
});

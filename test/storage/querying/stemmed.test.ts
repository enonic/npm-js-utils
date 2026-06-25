import {deepStrictEqual} from 'assert';
import {
	describe,
	test
} from '@jest/globals';
import { stemmed } from '../../../storage/querying';


describe('storage/querying/stemmed', () => {
	test('minimal', () => {
		deepStrictEqual(
			stemmed(
				'_alltext',
				'searchString',
				'no'
			),
			{
				stemmed: {
					fields: ['_alltext'],
					query: 'searchString',
					language: 'no'
				}
			},

		)
	});

	test('throws when language is not a string', () => {
		// @ts-expect-error Testing invalid input
		expect(() => stemmed('_alltext', 'searchString', null)).toThrow();
	});

	test('throws when language is invalid', () => {
		// @ts-expect-error Testing invalid input
		expect(() => stemmed('_alltext', 'searchString', 'nope')).toThrow();
	});
});

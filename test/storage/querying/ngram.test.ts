import {deepStrictEqual} from 'assert';
import {
	describe,
	test
} from '@jest/globals';
import { ngram } from '../../../storage/querying';


describe('storage/querying/ngram', () => {
	test('minimal', () => {
		deepStrictEqual(
			ngram(
				'_allText',
				'searchString'
			),
			{
				ngram: {
					fields: ['_allText'],
					query: 'searchString',
				}
			},

		)
	});
});

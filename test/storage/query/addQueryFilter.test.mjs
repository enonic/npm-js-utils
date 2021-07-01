import {deepStrictEqual} from 'assert';
import {addQueryFilter} from '../../../dist/esm/index.mjs';

describe('addQueryFilter', () => {
	it('adds under boolean.must by default', () => {
		deepStrictEqual(
			{
				boolean: {
					must: {
						exists: {
							field: 'required'
						}
					}
				}
			},
			addQueryFilter({
				filter:{exists:{field: 'required'}}
			})
		)
	})
});

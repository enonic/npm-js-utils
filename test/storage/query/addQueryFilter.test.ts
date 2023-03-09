import {deepStrictEqual} from 'assert';
import {addQueryFilter} from '@enonic/js-utils';

describe('addQueryFilter', () => {
	// it('adds under boolean.must by default', () => {
	// 	deepStrictEqual(
	// 		{
	// 			boolean: {
	// 				must: {
	// 					exists: {
	// 						field: 'required'
	// 					}
	// 				}
	// 			}
	// 		},
	// 		addQueryFilter({
	// 			filter:{exists:{field: 'required'}}
	// 		})
	// 	)
	// })
	//
	// it('adds under boolean.mustNot', () => {
	// 	deepStrictEqual(
	// 		{
	// 			boolean: {
	// 				mustNot: {
	// 					exists: {
	// 						field: 'unwanted'
	// 					}
	// 				}
	// 			}
	// 		},
	// 		addQueryFilter({
	// 			clause: 'mustNot',
	// 			filter:{exists:{field: 'unwanted'}}
	// 		})
	// 	)
	// })

	it('adds under boolean.should (three filters)', () => {
		deepStrictEqual(
			{
				boolean: {
					should: [{
						exists: {
							field: 'a'
						}
					},{
						exists: {
							field: 'b'
						}
					},{
						exists: {
							field: 'c'
						}
					}]
				}
			},
			addQueryFilter({
				clause: 'should',
				filter:{exists:{field: 'c'}},
				filters: addQueryFilter({
					clause: 'should',
					filter:{exists:{field: 'b'}},
					filters: addQueryFilter({
						clause: 'should',
						filter:{exists:{field: 'a'}}
					})
				})
			})
		)
	})
});

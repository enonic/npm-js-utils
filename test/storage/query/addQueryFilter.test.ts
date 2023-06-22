import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { addQueryFilter } from '../../../index';

describe('addQueryFilter', () => {
	// test('adds under boolean.must by default', () => {
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
	// test('adds under boolean.mustNot', () => {
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

	test('adds under boolean.should (three filters)', () => {
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

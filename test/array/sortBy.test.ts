import {deepStrictEqual} from 'assert';
import * as assert from 'assert';
import {sortByProperty} from '@enonic/js-utils';

describe('array', () => {
	describe('sortByProperty', () => {
		describe('throws', () => {
			it("when object doesn't have property", () => {
				assert.throws(() => {
					sortByProperty([{
						age: 2
					},{
						age: 1
					}], 'name')
				}, {
					name: 'TypeError',
					message: /doesn't have a property named/
				});
			}); // it
			it('when values are not both strings or both numbers', () => {
				assert.throws(() => {
					sortByProperty([{
						name: 'John'
					},{
						name: 1
					}], 'name')
				}, {
					name: 'TypeError',
					message: /neither number nor string/
				});
			}); // it
		}); // describe throws

		describe('sorts', () => {
			it('numeric values', () => {
				deepStrictEqual(
					[{
						age: 1
					},{
						age: 2
					}],
					sortByProperty([{
						age: 2
					},{
						age: 1
					}], 'age')
				)
			}); // it
			it('string values', () => {
				deepStrictEqual(
					[{
						name: 'Jane'
					},{
						name: 'John'
					}],
					sortByProperty([{
						name: 'John'
					},{
						name: 'Jane'
					}], 'name')
				)
			}); // it
			it('stringLiteral and stringObject values', () => {
				deepStrictEqual(
					[{
						name: 'Jane'
					},{
						name: 'John'
					}],
					sortByProperty([{
						name: 'John'
					},{
						name: new String('Jane')
					}], 'name')
				)
			}); // it
		}); // describe sorts
	}); // describe sortByProperty
}); // describe array

import {deepStrictEqual} from 'assert';
import * as assert from 'assert';
import { sort } from '../../../../storage/query/dsl/index';


describe('sort', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				field: '_score'
			},
			sort('_score')
		)
	});
	it('ascending', () => {
		deepStrictEqual(
			{
				field: '_score',
				direction: 'ASC'
			},
			sort('_score','ASC')
		)
	});
	it('descending', () => {
		deepStrictEqual(
			{
				field: '_score',
				direction: 'DESC'
			},
			sort('_score','DESC')
		)
	});
	it('two fields without direction', () => {
		deepStrictEqual(
			[{
				field: '_score'
			}, {
				field: '_name',
			}],
			sort('_score', '_name')
		)
	});
	it('two fields with direction', () => {
		deepStrictEqual(
			[{
				field: '_score',
				direction: 'DESC'
			}, {
				field: '_name',
				direction: 'ASC'
			}],
			sort('_score', 'DESC', '_name', 'ASC')
		)
	});
	describe('throws', () => {
		it('when single item direction', () => {
			assert.throws(() => {
				sort('DESC')
			}, {
				name: 'Error',
				message: 'sort: direction:DESC is optional, but must come after field parameter!'
			}); // throws
		}); // it
		it('when two directions', () => {
			assert.throws(() => {
				sort('_score', 'ASC', 'DESC')
			}, {
				name: 'Error',
				message: 'sort: direction:DESC is optional, but must come after field parameter!'
			}); // throws
		}); // it
	}); // describe throws
}); // describe sort

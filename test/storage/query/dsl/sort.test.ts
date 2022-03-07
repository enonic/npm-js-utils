import {deepStrictEqual} from 'assert';
import * as assert from 'assert';
import {storage} from '../../../../src';

const sort = storage.query.dsl.sort;


describe('sort', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				sort: {
					field: '_score'
				}
			},
			sort('_score')
		)
	});
	it('ascending', () => {
		deepStrictEqual(
			{
				sort: {
					field: '_score',
					direction: 'ASC'
				}
			},
			sort('_score','ASC')
		)
	});
	it('descending', () => {
		deepStrictEqual(
			{
				sort: {
					field: '_score',
					direction: 'DESC'
				}
			},
			sort('_score','DESC')
		)
	});
	it('two fields without direction', () => {
		deepStrictEqual(
			{
				sort: [{
					field: '_score'
				}, {
					field: '_name',
				}]
			},
			sort('_score', '_name')
		)
	});
	it('two fields with direction', () => {
		deepStrictEqual(
			{
				sort: [{
					field: '_score',
					direction: 'DESC'
				}, {
					field: '_name',
					direction: 'ASC'
				}]
			},
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

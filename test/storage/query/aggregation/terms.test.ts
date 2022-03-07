import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';


const {
	stats,
	terms
} = storage.query.aggregation;


describe('terms', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				terms: {
					field: 'myCategory'
				}
			},
			terms('myCategory')
		)
	}); // it
	it('maximal', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'myCategory',
						order: '_count dEsC',
						size: 10,
						minDocCount: 2
					},
					aggregations: {
						priceStats: {
							stats: {
								field: 'mySubCategory'
							}
						}
					}
				}
			},
			{
				products: terms('myCategory', '_count dEsC', 10, 2, {
					priceStats: stats('mySubCategory')
				})
			}
		)
	}); // it
}); // describe terms

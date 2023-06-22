import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {
	stats,
	terms
} from '../../../../storage/query/aggregation/index';

describe('terms', () => {
	test('minimal', () => {
		deepStrictEqual(
			{
				terms: {
					field: 'myField'
				}
			},
			terms('myField')
		)
	}); // it
	test('just field and aggregations', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'data.product.category'
					},
					aggregations: {
						priceStats: {
							stats: {
								field: 'data.product.price'
							}
						}
					}
				}
			},
			{
				products: terms('data.product.category', {
					priceStats: stats('data.product.price')
				})
			}
		)
	}); // it
	test('just field, size and minDocCount', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'data.product.category',
						size: 10,
						minDocCount: 2
					}
				}
			},
			{
				products: terms('data.product.category', 10, 2)
			}
		)
	}); // it
	test('just field and size', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'data.product.category',
						size: 10
					}
				}
			},
			{
				products: terms('data.product.category', 10)
			}
		)
	}); // it
	test('just field and order', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'data.product.category',
						order: '_count dEsC',
					}
				}
			},
			{
				products: terms('data.product.category', '_count dEsC')
			}
		)
	}); // it
	test('everything in order', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'data.product.category',
						order: '_count dEsC',
						size: 10,
						minDocCount: 2
					},
					aggregations: {
						priceStats: {
							stats: {
								field: 'data.product.price'
							}
						}
					}
				}
			},
			{
				products: terms('data.product.category', '_count dEsC', 10, 2, {
					priceStats: stats('data.product.price')
				})
			}
		)
	}); // it
	test('everything backwards except size and minDocCount', () => {
		deepStrictEqual(
			{
				products: {
					terms: {
						field: 'data.product.category',
						order: '_count dEsC',
						size: 10,
						minDocCount: 2
					},
					aggregations: {
						priceStats: {
							stats: {
								field: 'data.product.price'
							}
						}
					}
				}
			},
			{
				products: terms('data.product.category', {
					priceStats: stats('data.product.price')
				}, 10, 2, '_count dEsC')
			}
		)
	}); // it
}); // describe terms

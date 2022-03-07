import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

const inQuery = storage.query.dsl.inQuery;


describe('inQuery', () => {
	it('minimal', () => {
		deepStrictEqual(
			{
				in: {
					field: 'myNumber',
					values: [
						3.2,
						4.0,
						5
					]
				}
			},
			inQuery('myNumber', [
				3.2,
				4.0,
				5
			])
		)
	});
	it('boost', () => {
		deepStrictEqual(
			{
				in: {
					field: 'myDateTime',
					values: [
						"2015-02-26T12:00:00.030Z",
						"2015-02-26T12:00:00-02:23"
					],
					boost: 2
				}
			},
			inQuery(
				'myDateTime',
				[
					"2015-02-26T12:00:00.030Z",
					"2015-02-26T12:00:00-02:23"
				],
				2
			)
		)
	});
	it('analysed index type', () => {
		deepStrictEqual(
			{
				in: {
					field: 'myDateTime',
					values: [
						"2015-02-26T12:00:00.030Z",
						"2015-02-26T12:00:00-02:23"
					],
					boost: 1,
					type: 'dateTime'
				}
			},
			inQuery(
				'myDateTime',
				[
					"2015-02-26T12:00:00.030Z",
					"2015-02-26T12:00:00-02:23"
				],
				1,
				'dateTime'
			)
		)
	});
}); // describe inQuery

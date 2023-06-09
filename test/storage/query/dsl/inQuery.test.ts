import {deepStrictEqual} from 'assert';
import { inQuery } from '../../../../storage/query/dsl/index';


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
	it('type time', () => {
		deepStrictEqual(
			{
				in: {
					field: 'myTime',
					values: [
						"12:00",
						"13:00"
					],
					boost: 1,
					type: 'time'
				}
			},
			inQuery(
				'myTime',
				[
					"12:00",
					"13:00"
				],
				1,
				'time'
			)
		)
	});
	it('type whatever', () => {
		deepStrictEqual(
			{
				in: {
					field: 'whatever',
					values: [
						"whatever",
					],
					boost: 1.1
				}
			},
			inQuery(
				'whatever',
				[
					"whatever",
				],
				1.1,
				//@ts-expect-error Argument of type '"whatever"' is not assignable to parameter of type 'DslQueryType'.
				'whatever'
			)
		)
	});
}); // describe inQuery

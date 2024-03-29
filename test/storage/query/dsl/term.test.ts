import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { term } from '../../../../storage/query/dsl/index';


describe('term', () => {
	test('minimal', () => {
		deepStrictEqual(
			{
				term: {
					field: 'myNumber',
					value: 4.2
				}
			},
			term('myNumber', 4.2)
		)
	});
	test('boost', () => {
		deepStrictEqual(
			{
				term: {
					field: 'myBoolean',
					value: true,
					boost: 2
				}
			},
			term('myBoolean', true, 2)
		)
	});
	test('type time', () => {
		deepStrictEqual(
			{
				term: {
					field: 'myTime',
					type: 'time',
					value: '12:00',
					boost: 2
				}
			},
			term('myTime', '12:00', 2, 'time')
		)
	});
	test('type dateTime', () => {
		deepStrictEqual(
			{
				term: {
					field: 'myDateTime',
					type: 'dateTime',
					value: '2022-12-09T11:04Z',
					boost: 1.1
				}
			},
			term('myDateTime', '2022-12-09T11:04Z', 1.1, 'dateTime')
		)
	});
	test('type whatever', () => {
		deepStrictEqual(
			{
				term: {
					field: 'myString',
					value: 'myStringValue',
					boost: -1.1
				}
			},
			term(
				'myString',
				'myStringValue',
				-1.1,
				//@ts-expect-error TS2345: Argument of type '"whatever"' is not assignable to parameter of type 'DslQueryType'.
				'whatever'
			)
		)
	});
}); // describe term

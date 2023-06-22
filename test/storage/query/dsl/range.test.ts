import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { range } from '../../../../storage/query/dsl/index';


describe('range', () => {
	test('minimal', () => {
		deepStrictEqual(
			{
				range: {
					field: 'myNumber',
					lte: 5
				}
			},
			range<number>(
				'myNumber',
				{
					lte: 5
				}
			)
		)
	});
	test('boost', () => {
		deepStrictEqual(
			{
				range: {
					field: 'myString',
					gte: 'a',
					lt: 'd',
					boost: 2
				}
			},
			range<string>(
				'myString',
				{
					gte: 'a',
					lt: 'd'
				},
				2
			)
		)
	});
	test('analysed index type', () => {
		const date = new Date();
		deepStrictEqual(
			{
				range: {
					field: 'myDateTime',
					gt: date.toISOString(),
					boost: 1,
					type: 'dateTime'
				}
			},
			range<Date>(
				'myDateTime',
				{
					gt: date
				},
				1,
				'dateTime'
			)
		)
	});
	test('type time', () => {
		const time = '12:00';
		deepStrictEqual(
			{
				range: {
					field: 'myTime',
					gt: time,
					boost: 1,
					type: 'time'
				}
			},
			range(
				'myTime',
				{
					gt: time
				},
				1,
				'time'
			)
		)
	});
	test('type whatever', () => {
		const whatever = 'whatever';
		deepStrictEqual(
			{
				range: {
					field: 'whatever',
					gt: whatever,
					boost: 1.1
				}
			},
			range(
				'whatever',
				{
					gt: whatever
				},
				1.1,
				//@ts-expect-error Argument of type '"whatever"' is not assignable to parameter of type 'DslQueryType'.
				'whatever'
			)
		)
	});
}); // describe range

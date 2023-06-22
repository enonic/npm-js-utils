import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { like } from '../../../../storage/query/dsl/index';


describe('like', () => {
	test('minimal', () => {
		deepStrictEqual(
			{
				like: {
					field: 'myString',
					value: 'start*'
				}
			},
			like('myString', 'start*')
		)
	});
	test('boost', () => {
		deepStrictEqual(
			{
				like: {
					field: 'myString',
					value: '*end',
					boost: 2.2
				}
			},
			like('myString', '*end', 2.2)
		)
	});
	test('type dateTime', () => {
		deepStrictEqual(
			{
				like: {
					field: 'myDateTime',
					value: '2022-12-09T11:*',
					boost: 2.2,
					type: 'dateTime'
				}
			},
			like('myDateTime', '2022-12-09T11:*', 2.2, 'dateTime')
		)
	});
	test('type time', () => {
		deepStrictEqual(
			{
				like: {
					field: 'myTime',
					value: '12:0*',
					boost: 2.2,
					type: 'time'
				}
			},
			like('myTime', '12:0*', 2.2, 'time')
		)
	});
	test('type whatever', () => {
		deepStrictEqual(
			{
				like: {
					field: 'whatever',
					value: '*whatever',
					boost: 2.2
				}
			},
			like(
				'whatever',
				'*whatever',
				2.2,
				//@ts-expect-error Argument of type '"whatever"' is not assignable to parameter of type 'DslQueryType'.
				'whatever'
			)
		)
	});
}); // describe like

import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

const range = storage.query.dsl.range;


describe('range', () => {
	it('minimal', () => {
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
	it('boost', () => {
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
	it('analysed index type', () => {
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
	it('type time', () => {
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
	it('type whatever', () => {
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
				'whatever'
			)
		)
	});
}); // describe range

import {deepStrictEqual} from 'assert';
import {storage} from '@enonic/js-utils';

const like = storage.query.dsl.like;


describe('like', () => {
	it('minimal', () => {
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
	it('boost', () => {
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
	it('type dateTime', () => {
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
	it('type time', () => {
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
	it('type whatever', () => {
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

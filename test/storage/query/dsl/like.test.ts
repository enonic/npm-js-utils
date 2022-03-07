import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

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
}); // describe like

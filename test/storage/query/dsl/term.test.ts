import {deepStrictEqual} from 'assert';
import {storage} from '../../../../src';

const term = storage.query.dsl.term;


describe('term', () => {
	it('minimal', () => {
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
	it('boost', () => {
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
}); // describe term

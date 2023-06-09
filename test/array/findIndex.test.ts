import {deepStrictEqual} from 'assert';
import {findIndex} from '../../index';

const ARRAY_OF_OBJ = [{
	path: 'a'
},{
	path: 'b'
},{
	path: 'c'
}]


describe('findIndex', () => {
	it('Finds index 0', () => {
		deepStrictEqual(
			0,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'a')
		)
	});
	it('Finds index 1', () => {
		deepStrictEqual(
			1,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'b')
		)
	});
	it('Finds index 2', () => {
		deepStrictEqual(
			2,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'c')
		)
	});
	it('Returns -1 when no match', () => {
		deepStrictEqual(
			-1,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'd')
		)
	});
});

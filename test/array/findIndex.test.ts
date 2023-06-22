import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {findIndex} from '../../index';

const ARRAY_OF_OBJ = [{
	path: 'a'
},{
	path: 'b'
},{
	path: 'c'
}]


describe('findIndex', () => {
	test('Finds index 0', () => {
		deepStrictEqual(
			0,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'a')
		)
	});
	test('Finds index 1', () => {
		deepStrictEqual(
			1,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'b')
		)
	});
	test('Finds index 2', () => {
		deepStrictEqual(
			2,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'c')
		)
	});
	test('Returns -1 when no match', () => {
		deepStrictEqual(
			-1,
			findIndex(ARRAY_OF_OBJ, ({path}) => path === 'd')
		)
	});
});

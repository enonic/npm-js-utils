import {deepStrictEqual} from 'assert';
import {isObject} from '../../dist/esm/index.mjs';


describe('isObject', () => {
	it('true {}', () => {
		deepStrictEqual(true,isObject({}))
	});
	it('false []', () => {
		deepStrictEqual(false,isObject([]))
	});
});

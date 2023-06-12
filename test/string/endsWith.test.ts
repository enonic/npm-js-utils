import {deepStrictEqual} from 'assert';
import { endsWith } from '../../index';


describe('string', () => {
	describe('endsWith', () => {
		it("endsWith('word', 'd') --> true'", () => {
			deepStrictEqual(true, endsWith('word', 'd'))
		});
		it("endsWith('word', 'rd') --> true'", () => {
			deepStrictEqual(true, endsWith('word', 'rd'))
		});
		it("endsWith('word', 'o') --> false'", () => {
			deepStrictEqual(false, endsWith('word', 'o'))
		});
	});
});

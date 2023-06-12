import {deepStrictEqual} from 'assert';
import { startsWith } from '../../index';


describe('string', () => {
	describe('startsWith', () => {
		it("startsWith('word', 'w') --> true'", () => {
			deepStrictEqual(true,startsWith('word', 'w'))
		});
		it("startsWith('word', 'wo') --> true'", () => {
			deepStrictEqual(true,startsWith('word', 'wo'))
		});
		it("startsWith('word', 'o') --> false'", () => {
			deepStrictEqual(false,startsWith('word', 'o'))
		});
		it("startsWith('word', 'o', 1) --> true'", () => {
			deepStrictEqual(true,startsWith('word', 'o', 1))
		});
	});
});

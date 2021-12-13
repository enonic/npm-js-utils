import {deepStrictEqual} from 'assert';
import {ucFirst} from '../../dist/esm/index.mjs';


describe('string', () => {
	describe('ucFirst', () => {
		it("ucFirst('word') --> 'Word'", () => {
			deepStrictEqual('Word',ucFirst('word'))
		});
		it("ucFirst('worD') --> 'WorD'", () => {
			deepStrictEqual('WorD',ucFirst('worD'))
		});
	});
});

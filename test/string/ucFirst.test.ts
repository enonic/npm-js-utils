import {deepStrictEqual} from 'assert';
import {ucFirst} from '@enonic/js-utils';


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

import {deepStrictEqual} from 'assert';
import {
	//toStr,
	unStem
} from '../../dist/esm/index.mjs';


describe('unStemNorwegian', () => {
	it('Returns a list of words, with Norwegian endings added', () => {
		const expected = ['bila','bile','bilede','bilande','bilende','bilane',
			'bilene','bilhetene','bilerte','bilen','bilheten','bilar','biler',
			'bilheter','bils','bilas','biles','biledes','bilendes','bilenes',
			'bilhetenes','bilens','bilhetens','bilers','bilets','bilet',
			'bilhet','bilert','bilast','bildt','bilvt','billeg','bileleg',
			'bilig','bileig','billig','bilelig','bilels','billov','bilelov',
			'bilslov','bilhetslov'
		];
		const actual = unStem('bil', 'no');
		//console.log(toStr(actual));
		deepStrictEqual(
			expected,
			actual
		)
	});
});

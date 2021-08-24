import {deepStrictEqual} from 'assert';
import {
	//toStr,
	unStem
} from '../../dist/esm/index.mjs';


describe('unStemEnglish', () => {
	it('Returns a list of words, with Norwegian endings added', () => {
		const expected = ['cararsen','carcommun','cargener',"car's'","car's",
			'caried','cars','caries','carsses','carss','carus','car','carbb',
			'cardd','carff','cargg','carbl','carmm','carnn','carpp','carrr',
			'carat','cartt','cariz','cared','careed','caring','caredly',
			'careedly','caringly','caranci','carenci','carogi','carli','carbli',
			'carabli','caralli','carfulli','carlessli','carousli','carentli',
			'caraliti','carbiliti','cariviti','cartional','carational',
			'caralism','caration','carization','carizer','carator','cariveness',
			'carfulness','carousness','caricate','carative','caralize',
			'cariciti','carical','cartional','carational','carful','carness',
			'caric','carance','carence','carable','carible','carate','carive',
			'carize','cariti','caral','carism','carion','carer','carous',
			'carant','carent','carment','carement','care','carl','carsucceed',
			'carproceed','carexceed','carcanning','carinning','carearring',
			'carherring','carouting','carandes','caratlas','carbias',
			'carcosmos','cardying','carearly','cargently','carhowe','caridly',
			'carlying','carnews','caronly','carsingly','carskies','carskis',
			'carsky','cartying','carugly'];
		const actual = unStem('car', 'en');
		//console.log(toStr(actual));
		deepStrictEqual(
			expected,
			actual
		)
	});
});

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

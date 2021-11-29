import {deepStrictEqual} from 'assert';
import {
	isString,
	toStr,
	validateRepoId
} from '../../../dist/esm/index.mjs';

const VALID = [
	'0123456789',
	'a',
	'z',

	// Since GraphQL doesn't like dash, I would even avoid using dash
	'a-a',
	'a-',
	'-a', // I wish this was illegal

	// Dot
	'a.a',
	'a.',

	// Colon
	':',
	':a',
	'a:a',
	'a:',

	// Underscore
	'a_a',
	'a_',
];


//const ASCII_NON_LETTERS = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
const INVALID_ASCII_CHARS = [
	' ',
	'!',
	'"',
	'#',
	'$',
	'%',
	'&',
	"'",
	'(',
	')',
	'*',
	'+',
	',',
	//'-', // 45 Allowed
	//'.', // 46 Allowed
	'/',
	//':' // 58 NOTE Colon is actually allowed in Enonic XP 7.7.2, but some filesystems don't like it!
	';',
	'<',
	'=',
	'>',
	'?',
	'@',
	'[',
	'\\',
	']',
	'^',
	//'_', // 95 Allowed
	'`',
	'{',
	'|',
	'}',
	'~'
];

const INVALID = [
	null,
	'',
	'A',

	// Space
	'a a',
	' a',
	'a ',

	'_a',
	'.a'
];

//const ASCII_FOLDING = 'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ';

// WARNING For some reason these 3 letters fails: y̨in̈
const ASCII_FOLDING = 'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨ƳąɓçđɗęħįƙłøơşșţțŧųưƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ';


describe('validateRepoId()', () => {
	describe('returns null when repoId is valid', () => {
		VALID.forEach((valid) => {
			it(`validateRepoId(${toStr(valid)}) --> null`, () => {
				deepStrictEqual(
					null,
					validateRepoId(valid)
				);
			});
		});
	});
	describe('returns a string with an error message when repoId is invalid', () => {
		INVALID.forEach((invalid) => {
			it(`validateRepoId(${toStr(invalid)}) --> errorStr`, () => {
				const res = validateRepoId(invalid);
				//console.debug(`res:${toStr(res)}`);
				deepStrictEqual(
					true,
					isString(res)
				);
			});
		});
		INVALID_ASCII_CHARS.forEach((invalid) => {
			const repoId = `a${invalid}a`;
			it(`validateRepoId(${toStr(repoId)}) --> errorStr`, () => {
				const res = validateRepoId(repoId);
				//console.debug(`res:${toStr(res)}`);
				deepStrictEqual(
					true,
					isString(res)
				);
			});
		});
		for (var i = 0; i < ASCII_FOLDING.length; i++) {
			const repoId = `a${ASCII_FOLDING[i]}a`;
			it(`validateRepoId(${toStr(repoId)}) --> errorStr`, () => {
				const res = validateRepoId(repoId);
				//console.debug(`res:${toStr(res)}`);
				deepStrictEqual(
					true,
					isString(res)
				);
			});
		}
	});
});

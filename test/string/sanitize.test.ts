import {
	ASCII_DIGITS,
	ASCII_PRINTABLE_LETTERS_CAPITAL,
	ASCII_PRINTABLE_LETTERS_LOWERCASE,
	ASCII_PUNCTUATION
} from '@enonic/test-data/dist/String';
import {strictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { sanitize } from '../../index';


const TESTS = [
	['-hypen-becomes-underscore-', '_hypen_becomes_underscore_'],
	['æøå_is_folded', 'aeoa_is_folded'],
	['__double__becomes__one__', '_double_becomes_one_'],
	[
		ASCII_DIGITS.join(''),
		ASCII_DIGITS.join('')
	], [
		ASCII_PRINTABLE_LETTERS_LOWERCASE.join(''),
		ASCII_PRINTABLE_LETTERS_LOWERCASE.join('')
	], [
		ASCII_PRINTABLE_LETTERS_CAPITAL.join(''),
		ASCII_PRINTABLE_LETTERS_CAPITAL.join('')
	], [
		ASCII_PUNCTUATION.join(''),
		'_'
	], [
		'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ',
		'AEDEAE_IJNOESSTHWZaedeae_ijnoeqsssthwzABCDDEHIKLOOSSTTTUUY_Yabcddehikloosstttuuy_yAAAAAAAAAAAAEAEAEBCCCCCDDDDDEEEEEEEEEEEAEGGGGG_aaaaaaaaaaaaeaeaebcccccdddddeeeeeeeeeeeaeggGgg_HHHIIIIIIIIIIIIIJJKKLLLLL_NNN_NNNNOOOOOOOOOOOOOOEhhhiiiiiiiiiiiiijjkkqlllllnnn_nnnnooooooooooooooeRRRSSSSSSSSTTTTTHUUUUUUUUUUUUUWWWWWYYYYYYYZZZZrrrsssssssssttttthuuuuuuuuuuuuuwwwwwyyyyyyyzzzz'
	]
];

const TESTS_HYPHEN = [
	['_underscore_becomes_hyphen_', '-underscore-becomes-hyphen-', ],
	['æøå-is-folded', 'aeoa-is-folded'],
	['--double--becomes--one--', '-double-becomes-one-'],
	[
		ASCII_DIGITS.join(''),
		ASCII_DIGITS.join('')
	], [
		ASCII_PRINTABLE_LETTERS_LOWERCASE.join(''),
		ASCII_PRINTABLE_LETTERS_LOWERCASE.join('')
	], [
		ASCII_PRINTABLE_LETTERS_CAPITAL.join(''),
		ASCII_PRINTABLE_LETTERS_CAPITAL.join('')
	], [
		ASCII_PUNCTUATION.join(''),
		'-'
	], [
		'ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ',
		'AEDEAE-IJNOESSTHWZaedeae-ijnoeqsssthwzABCDDEHIKLOOSSTTTUUY-Yabcddehikloosstttuuy-yAAAAAAAAAAAAEAEAEBCCCCCDDDDDEEEEEEEEEEEAEGGGGG-aaaaaaaaaaaaeaeaebcccccdddddeeeeeeeeeeeaeggGgg-HHHIIIIIIIIIIIIIJJKKLLLLL-NNN-NNNNOOOOOOOOOOOOOOEhhhiiiiiiiiiiiiijjkkqlllllnnn-nnnnooooooooooooooeRRRSSSSSSSSTTTTTHUUUUUUUUUUUUUWWWWWYYYYYYYZZZZrrrsssssssssttttthuuuuuuuuuuuuuwwwwwyyyyyyyzzzz'
	]
];


describe('string', () => {
	describe('sanitize', () => {
		describe('fallback_sign the default underscore _', () => {
			TESTS.forEach(([string, expected]) => {
				test(`sanitize(${string}) --> ${expected}`, () => {
					strictEqual(
						expected,
						sanitize(string)
					)
				});
			});
		}); // describe fallback_sign the default underscore _
		describe('fallback_sign hyphen -', () => {
			TESTS_HYPHEN.forEach(([string, expected]) => {
				test(`sanitize(${string},{fallback_sign: '-'}) --> ${expected}`, () => {
					strictEqual(
						expected,
						sanitize(string,{fallback_sign: '-'})
					)
				});
			});
		}); // describe fallback_sign hyphen -
	}); // describe sanitize
}); // describe string

import {fold} from './fold';


enum CharType { }
export type Char = string & CharType
// const isChar = (str: string): str is Char => /^(.|\n)$/.test(
// 	str
// )

// export type LowerCaseAtoZCharacter =
// 	| 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l'
// 	| 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x'
// 	| 'y' | 'z';
//
// export type UpperCaseAtoZCharacter =
// 	| 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L'
// 	| 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X'
// 	| 'Y' | 'Z'
//
// export type AtoZCharacter = LowerCaseAtoZCharacter | UpperCaseAtoZCharacter
//
// Not possible in TypeScript yet :(
// Type alias 'AtoZString' circularly references itself.
// export type AtoZString = '' | `${AtoZCharacter}` | `${AtoZString}${AtoZString}`


const WHITELIST_PATTERN = `[^a-zA-Z0-9ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]+`;
const WHITELIST_REGEXP = new RegExp(WHITELIST_PATTERN, 'gi');


/**
 * This almost adheres to the GraphQL specification Names RegExp.
 * The difference is that this function allowes a string to start with a digit,
 * while the GraphQL specification doesn't.
 * https://spec.graphql.org/June2018/#sec-Names
 */
// /[_A-Za-z][_0-9A-Za-z]*/
export function sanitize(
	inStr: string,
	{
		fallback_sign = '_'
	}: {
		fallback_sign?: '_' | '-' | Char
	} = {}
) {
	if(!inStr) { return ''; }
	// remove diacritic characters
	// map letters to the English alphabet (ASCII encoding)
	return fold(inStr, {fallback_sign})
		.replace(WHITELIST_REGEXP, fallback_sign)
		// strip duplicated "fallback_sign" characters
		.replace(new RegExp(`${fallback_sign}{2,}`,'g'), fallback_sign);
}

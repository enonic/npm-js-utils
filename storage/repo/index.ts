
/*
Can:
aaa | Can start, contain and end with with lowercase letter :)
a_a | Can contain underscore :)
b-b | Can contain dash, but keep in mind GraphQL doesn't like dash...

Can't:
A  | aA | Can't contain uppercase letters!
_a | Can't start with underscore!
*/
import {
	isString,
	toStr
} from '../../value';

//const VALID_REGEXP_STR = '0-9a-z'


export function validateRepoId(repoId :string) {
	if (!isString(repoId)) {
		return 'repoId must be a string!';
	}
	if (repoId === '') {
		return "repoId can't be an empty string!";
	}

	const firstChar = repoId.charAt(0);
	//const firstChar = repoId[0];
	//const firstChar = repoId.substring(0,1);

	//if (repoId.startsWith('_')) {
	if ( firstChar === '_') {
		return "repoId can't start with an underscore!";
	}
	if ( firstChar === '.') {
		return "repoId can't start with a dot!";
	}

	if (repoId.toLowerCase() !== repoId) {
		return "repoId can't contain uppercase letters!";
	}

	for (let i = 0; i < repoId.length; i++) {
  		const char = repoId.charAt(i);
		const code = char.charCodeAt(0);
		//console.debug(`char:${toStr(char)} charCode:${code}`)
		if (!(
			code === 45 // -
			|| code === 46 // .
			|| (
				code >= 48 // 0
				// digit 9 = code 57
				&& code <= 58 // :
			)
			|| code === 95 // _
			|| (
				code >= 97 // a
				&& code <= 122 // z
			) // a-z
		)) {
			return `char:${toStr(char)} with charCode:${code} is illegal! repoId can only contain - . 1-9 : _ a-z`;
		}
	}

	return null; // null means valid
}

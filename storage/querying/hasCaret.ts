import { includes as stringIncludes } from '../../string/includes';


/**
 * Check if a string includes a caret (^) sign.
 */
export function hasCaret(string: string): boolean {
	return stringIncludes(string, '^');
}

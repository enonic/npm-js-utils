import {
	flatten
} from '../../array/flatten';
import {
	QUERY_OPERATOR_OR
} from './constants';


export function or(...args: (string|string[])[]): string {
	const flattened = flatten(args);
	if (Array.isArray(flattened)) {
		if (flattened.length === 1) {
			return `${QUERY_OPERATOR_OR} ${flattened}`;
		}
		return flattened.join(` ${QUERY_OPERATOR_OR} `);
	}
	return `${QUERY_OPERATOR_OR} ${flattened}`;
}

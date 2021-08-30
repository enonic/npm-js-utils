import {
	flatten
} from '../../array/flatten';
import {
	QUERY_OPERATOR_AND
} from './constants';


export function and(...args :string[]) :string {
	const flattened = flatten(args);
	if (Array.isArray(flattened)) {
		if (flattened.length === 1) {
			return `${QUERY_OPERATOR_AND} ${flattened}`;
		}
		return flattened.join(` ${QUERY_OPERATOR_AND} `);
	}
	return `${QUERY_OPERATOR_AND} ${flattened}`;
}

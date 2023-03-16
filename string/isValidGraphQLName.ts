import {isString} from '../value/isString';


// https://spec.graphql.org/April2016/#Name
const REGEXP_GRAPHQL_NAME = /^[_A-Za-z][_0-9A-Za-z]*$/;


export function isValidGraphQLName(s :string) :boolean {
	return isString(s) && !!s.match(REGEXP_GRAPHQL_NAME);
}

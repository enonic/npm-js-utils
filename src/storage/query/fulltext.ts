import {
	QUERY_OPERATOR_OR,
	QUERY_OPERATORS,
	Fields
} from './constants';
import {fulltextOrNgram} from './fulltextOrNgram';


type Operator = typeof QUERY_OPERATORS[number]; // enum


export function fulltext(
	fields :Fields,
	searchString :string,
	operator :Operator = QUERY_OPERATOR_OR
) {
	return fulltextOrNgram('fulltext', fields, searchString, operator);
}

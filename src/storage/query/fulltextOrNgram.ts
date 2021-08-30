import {buildFields} from './buildFields';
import {
	QUERY_OPERATOR_AND,
	QUERY_OPERATOR_OR,
	QUERY_OPERATORS,
	Fields
} from './constants';


type Operator = typeof QUERY_OPERATORS[number]; // enum


export function fulltextOrNgram(
	fOrN :string, //= 'fulltext'
	fields :Fields,
	searchString :string,
	operator :Operator = QUERY_OPERATOR_OR
) :string {
	return `${fOrN}(${buildFields(fields)},'${searchString}'${
		operator.toUpperCase() === QUERY_OPERATOR_AND
			? `,'${QUERY_OPERATOR_AND}'`
			: '' // OR is the default https://developer.enonic.com/docs/xp/stable/storage/noql#ngram
		})`;
}

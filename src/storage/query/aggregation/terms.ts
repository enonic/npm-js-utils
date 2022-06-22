import type {
	Aggregations,
	TermsAggregation,
	TermsAggregationParams,
	//SortStatement,
	SortStatementCaseInsensitive
} from '../../../types/index.d';

//import {toStr} from '../../../';
import {isSet} from '../../../value';
import {isNumber} from '../../../value/isNumber';
import {isObject} from '../../../value/isObject';
import {isString} from '../../../value/isString';
//import {isDirectionCaseInsensitive} from '../sort';


function termsParams(
	field :string,
	order? :SortStatementCaseInsensitive,
	size? :number,
	minDocCount? :number

) :TermsAggregationParams {
	const terms :TermsAggregationParams = {
		field
	}
	if (order) {terms.order = order;}
	if (size) {terms.size = size;}
	if (minDocCount) {terms.minDocCount = minDocCount;}
	return terms;
}

type TermsOptionalParam = string|number|Aggregations;

/*function terms(
	field :string,
	order? :SortStatementCaseInsensitive,
	size? :number,
	minDocCount? :number,
	aggregations? :Aggregations
) :TermsAggregation;*/
function terms(field :string, ...optionalArgs :Array<TermsOptionalParam>) {
	let order :SortStatementCaseInsensitive|undefined;// = undefined;
	let size :number|undefined;// = undefined;
	let minDocCount :number|undefined;// = undefined;
	let aggregations :Aggregations|undefined// = undefined;

	for (let i = 0; i < optionalArgs.length; i++) {
	    const optinalArg = optionalArgs[i];
		//console.debug('i:%s optinalArg:%s', i, toStr(optinalArg));
		if (isString(optinalArg)) {
			if (order) {
				throw new Error(`terms: You can only provide one optional order parameter!`);
			}
			order = optinalArg as SortStatementCaseInsensitive;
		} else if (isNumber(optinalArg)) {
			if (isSet(minDocCount)) {
				throw new Error(`terms: You can only provide one or two optional number parameters!`);
			}
			if (isSet(size)) {
				minDocCount = optinalArg;
			} else {
				size = optinalArg;
			}
		} else if (isObject(optinalArg)) {
			if (aggregations) {
				throw new Error(`terms: You can only provide one optional aggregations parameter!`);
			}
			aggregations = optinalArg as Aggregations;
		} else {
			throw new Error(`terms: Unknown optional parameter type!`);
		}
	}

	const termsAggregation :TermsAggregation = {
		terms: termsParams(
			field,
			order,
			size,
			minDocCount
		)
	};
	if (aggregations) {
		termsAggregation.aggregations = aggregations;
	}
	return termsAggregation;
}


/* function termsNamed<
	Name extends string = string
>({
	field,
	name,
	// Optional
	order,
	size,
	minDocCount,
	aggregations
} :{
	field :string
	name :Name
	// Optional
	order? :SortStatementCaseInsensitive
	size? :number
	minDocCount? :number
	aggregations? :Aggregations
}) /*:Record<Name,TermsAggregation>* {
	return {
		[name]: terms(
			field,
			order,
			size,
			minDocCount,
			aggregations
		)
	} as Record<Name,TermsAggregation>;
}*/


export {
	terms,
	//termsNamed,
	termsParams
}

import type {AnalysedIndexType} from './index.d';


interface QueryExpressionInParams<ValueType> {
	field :string
	values :Array<ValueType>
	boost? :number
	type? :AnalysedIndexType
}

interface QueryExpressionIn<ValueType> {
	in :QueryExpressionInParams<ValueType>
}


export function inQuery<
	ValueType
>(
	field :string,
	values :Array<ValueType>,
	boost? :number,
	type? :AnalysedIndexType
) :QueryExpressionIn<ValueType> {
	const obj :QueryExpressionInParams<ValueType> = {
		field,
		values
	}
	if (boost) {
		obj.boost = boost;
	}
	if (type) {
		obj.type = type;
	}
	return {
		in: obj
	};
}

import type {
	CompoundExpression,
	CompoundExpressionBoolean
} from './types.d';


export function bool(compoundExpression :CompoundExpression) :CompoundExpressionBoolean {
	return {
		boolean: compoundExpression
	}
}

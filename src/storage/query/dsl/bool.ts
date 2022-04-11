import type {
	CompoundExpression,
	CompoundExpressionBoolean
} from '../../../types/index.d';


export function bool(compoundExpression :CompoundExpression) :CompoundExpressionBoolean {
	return {
		boolean: compoundExpression
	}
}

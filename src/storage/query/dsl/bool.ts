import type {
	CompoundExpression,
	CompoundExpressionBoolean
} from './index.d';


export function bool(compoundExpression :CompoundExpression) :CompoundExpressionBoolean {
	return {
		boolean: compoundExpression
	}
}

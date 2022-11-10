import type {BooleanDslExpression} from '/lib/xp/node';
import type {CompoundExpressionBoolean} from '../../../types/index.d';


export function bool(compoundExpression: BooleanDslExpression): CompoundExpressionBoolean {
	return {
		boolean: compoundExpression
	}
}

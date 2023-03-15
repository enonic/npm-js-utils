import type {BooleanDslExpression} from '/lib/xp/node';


export function bool(compoundExpression: BooleanDslExpression): {
	boolean :BooleanDslExpression;
} {
	return {
		boolean: compoundExpression
	}
}

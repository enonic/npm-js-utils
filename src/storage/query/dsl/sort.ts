import type {SortDirection} from '/lib/xp/node';
import type {
	OneOrMore,
	SortDSLExpression
} from '../../../types/index.d';

//import {toStr} from '../../../value';
import {isDirection} from '../sort';


function sort(field: string, direction?: SortDirection): SortDSLExpression;
function sort(...args: string[]): OneOrMore<SortDSLExpression>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function sort(...args: any): OneOrMore<SortDSLExpression> {
	//console.debug('args:%s', toStr(args));
	const sort: OneOrMore<SortDSLExpression> = [];
	let param: Partial<SortDSLExpression> = {};
	for (let i = 0; i < args.length; i++) {
	    const arg = args[i];
		if (isDirection(arg)) {
			//console.debug('isDirection arg:%s', arg);
			if (!param.field || param.direction) {
				throw new Error(`sort: direction:${arg} is optional, but must come after field parameter!`);
			}
			param.direction = arg;
		} else {
			//console.debug('isField arg:%s', arg);
			if (param.field) {
				sort.push(JSON.parse(JSON.stringify(param)) as SortDSLExpression); // Deref
				param = {
					field: arg
				};
			} else {
				param.field = arg;
			}
		}
		if (i === args.length - 1) {
			sort.push(param as SortDSLExpression); // No need to deref
		}
		//console.debug('i:%s sort:%s', i, toStr(sort));
	} // for
	//console.debug('sort:%s', toStr(sort));
	return sort.length === 1
		? sort[0] as SortDSLExpression
		: sort;
}

export { sort };

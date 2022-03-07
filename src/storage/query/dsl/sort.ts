import type {OneOrMore} from '../../../types.d';


//import {toStr} from '../../../value';


type SortDirection = "ASC" | "DESC";

interface QueryExpressionSortParams {
	field :string
	direction? :SortDirection
}

interface QueryExpressionSort {
	sort :OneOrMore<QueryExpressionSortParams>
}

function isDirection(s :string) :boolean {
	return s === 'ASC' || s === 'DESC';
}

function sort(field :string, direction? :SortDirection) :QueryExpressionSort;
function sort(...args :Array<string>) :QueryExpressionSort;
function sort(...args :any) :QueryExpressionSort {
	//console.debug('args:%s', toStr(args));
	const sort :OneOrMore<QueryExpressionSortParams> = [];
	let param :Partial<QueryExpressionSortParams> = {};
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
				sort.push(JSON.parse(JSON.stringify(param)) as QueryExpressionSortParams); // Deref
				param = {
					field: arg
				};
			} else {
				param.field = arg;
			}
		}
		if (i === args.length - 1) {
			sort.push(param as QueryExpressionSortParams); // No need to deref
		}
		//console.debug('i:%s sort:%s', i, toStr(sort));
	} // for
	//console.debug('sort:%s', toStr(sort));
	return sort.length === 1
		? {	sort: sort[0] as QueryExpressionSortParams}
		: { sort };
}

export { sort };

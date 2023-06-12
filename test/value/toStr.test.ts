import {deepStrictEqual} from 'assert';
import { toStr } from '../../index';

describe('toStr', () => {
	it('indents by default', () => {
		deepStrictEqual(
			`{
    "property": "value"
}`,
			toStr({
				property: 'value'
			})
		)
	})
});

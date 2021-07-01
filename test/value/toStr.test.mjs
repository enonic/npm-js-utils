import {deepStrictEqual} from 'assert';
import {toStr} from '../../dist/esm/index.mjs';

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

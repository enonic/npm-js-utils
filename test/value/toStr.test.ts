import {deepStrictEqual} from 'assert';
import {toStr} from '../../src';

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

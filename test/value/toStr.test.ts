import {deepStrictEqual} from 'assert';
import {toStr} from '@enonic/js-utils';

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

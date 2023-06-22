import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { toStr } from '../../index';

describe('toStr', () => {
	test('indents by default', () => {
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

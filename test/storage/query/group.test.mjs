import {deepStrictEqual} from 'assert';
import {group} from '../../../dist/esm/index.mjs';


describe('group', () => {
	it('minimal', () => {
		deepStrictEqual(
			"(a)",
			group('a')
		)
	});
});

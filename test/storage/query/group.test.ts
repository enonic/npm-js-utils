import {deepStrictEqual} from 'assert';
import {group} from '../../../src';


describe('group', () => {
	it('minimal', () => {
		deepStrictEqual(
			"(a)",
			group('a')
		)
	});
});

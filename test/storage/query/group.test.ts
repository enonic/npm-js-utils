import {deepStrictEqual} from 'assert';
import {group} from '@enonic/js-utils';


describe('group', () => {
	it('minimal', () => {
		deepStrictEqual(
			"(a)",
			group('a')
		)
	});
});

import {deepStrictEqual} from 'assert';
import { group } from '../../../index';


describe('group', () => {
	it('minimal', () => {
		deepStrictEqual(
			"(a)",
			group('a')
		)
	});
});

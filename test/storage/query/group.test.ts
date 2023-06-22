import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { group } from '../../../index';


describe('group', () => {
	test('minimal', () => {
		deepStrictEqual(
			"(a)",
			group('a')
		)
	});
});

import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {join} from '../../../../index';


const SIMPLE_TESTS: [string[],string][] = [[
	[],
	'.'
], [
	['a', 'b'],
	'a/b'
],[
	['a/b', 'c'],
	'a/b/c'
],[
	['a', '..'],
	'.'
],[
	['a/b', '..'],
	'a'
],[
	['a/b', '../c'],
	'a/c'
],[
	['a/b', '../..'],
	'.'
],[
	['a/b', '../../c'],
	'c'
]];


function toStr(a) {
	return JSON.stringify(a);
}


describe('storage', () => {
	describe('indexing', () => {
		describe('path', () => {
			describe('join', () => {
				for (let i = 0; i < SIMPLE_TESTS.length; i++) {
					const params = SIMPLE_TESTS[i][0];
					const expected = SIMPLE_TESTS[i][1];
					test(`join(${toStr(params)}) --> '${expected}'`, () => {
						deepStrictEqual(
							expected,
							join(params)
						)
					});
				} // for
				test("join(['a', 'b'], '\\') --> 'a\\b'", () => {
					deepStrictEqual(
						'a\\b',
						join(['a', 'b'], '\\')
					)
				});
			});
		});
	});
});

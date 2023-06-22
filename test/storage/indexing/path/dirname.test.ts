import {
	describe,
	expect,
	test
} from '@jest/globals';
import { dirname } from '../../../../index';
import { dirname as nodeDirname } from 'path';

const TESTS = [
	['/folder/../filename.ext', '/']
];


describe('storage', () => {
	describe('indexing', () => {
		describe('path', () => {
			describe('dirname', () => {
				TESTS.forEach(([path, expected]) => {
					test(`nodeDirname(${path}) --> ${expected}`, () => {
						expect(nodeDirname(path)).toBe(expected);
					});
					test(`dirname(${path}) --> ${expected}`, () => {
						expect(dirname(path)).toBe(expected);
					});
				});

				// test("nodeDirname('/') --> '/'", () => {
				// 	expect(nodeDirname('/')).toBe('/');
				// });
				// test("dirname('/') --> '/'", () => {
				// 	expect(dirname('/')).toBe('/');
				// });

				// test('/filename -> /', () => {
				// 	expect(dirname('/filename')).toBe('/');
				// });
				// test('/filename.ext -> /', () => {
				// 	expect(dirname('/filename.ext')).toBe('/');
				// });
				// test('/folder/filename.ext -> /folder', () => {
				// 	expect(dirname('/folder/filename.ext')).toBe('/folder');
				// });

				// test('folder/../filename.ext -> .', () => {
				// 	expect(dirname('folder/../filename.ext')).toBe('.');
				// });

				// test("nodeDirname('.') --> '.'", () => {
				// 	expect(nodeDirname('.')).toBe('.');
				// });
				// test('. -> .', () => {
				// 	expect(dirname('.')).toBe('.');
				// });

				// test('./ -> .', () => {
				// 	expect(dirname('./')).toBe('.');
				// });
				// test('\\folder\\..\\filename.ext -> \\', () => {
				// 	expect(dirname('\\folder\\..\\filename.ext', '\\')).toBe('\\');
				// });
				// test('folder\\..\\filename.ext -> .', () => {
				// 	expect(dirname('folder\\..\\filename.ext', '\\')).toBe('.');
				// });

				// Weird behaviour, but consistent with Node.js
				// test('..', () => {
				// 	expect(dirname('..')).toBe('.');
				// });
				// test('..', () => {
				// 	expect(nodeDirname('..')).toBe('.');
				// });

				// test('../', () => {
				// 	expect(dirname('../')).toBe('.');
				// });
				// test('../', () => {
				// 	expect(nodeDirname('../')).toBe('.');
				// });

				// // TODO This is wrong, not consistent with Node.js
				// test('../..', () => {
				// 	expect(dirname('../..')).toBe('.');
				// });
				// test('../..', () => {
				// 	expect(nodeDirname('../..')).toBe('.');
				// });
			});
		});
	});
});

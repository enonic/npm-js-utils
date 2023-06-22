import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { trimExt } from '../../../../index';


describe('trimExt', () => {
	test("trimExt('name.ext') --> 'name'", () => {
		deepStrictEqual(
			'name',
			trimExt('name.ext')
		)
	});
	test("trimExt('name.ext.ext') --> 'name.ext'", () => {
		deepStrictEqual(
			'name.ext',
			trimExt('name.ext.ext')
		)
	});
})

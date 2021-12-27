import {deepStrictEqual} from 'assert';

import {trimExt} from '../../../../src';


describe('trimExt', () => {
	it("trimExt('name.ext') --> 'name'", () => {
		deepStrictEqual(
			'name',
			trimExt('name.ext')
		)
	});
	it("trimExt('name.ext.ext') --> 'name.ext'", () => {
		deepStrictEqual(
			'name.ext',
			trimExt('name.ext.ext')
		)
	});
})

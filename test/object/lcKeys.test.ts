import { expect } from 'chai';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { lcKeys } from '../../index';


describe('lcKeys', () => {
	test('can be used to transform keys', () => {
		expect(lcKeys({
			Accept: 'text/html',
			'Accept-Encoding': 'gzip, deflate, br'
		})).to.deep.equal({
			accept: 'text/html',
			'accept-encoding': 'gzip, deflate, br'
		}, )
	});
});

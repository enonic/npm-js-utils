import { expect } from 'chai';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import { mapKeys } from '../../index';


describe('mapKeys', () => {
	test('can be used to transform keys', () => {
		expect(mapKeys({
			Accept: 'text/html',
			'Accept-Encoding': 'gzip, deflate, br'
		}, ({
			key,
			result,
			value
		}) => {
			result[String(key).toLowerCase()] = value;
		})).to.deep.equal({
			accept: 'text/html',
			'accept-encoding': 'gzip, deflate, br'
		}, )
	});
});

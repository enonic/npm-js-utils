import { expect } from 'chai';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
// import { mapKeys } from '../../index';
import mapKeys from '../../object/mapKeys';


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
		})
	});
	test('handles an empty object', () => {
		expect(mapKeys({}, ({
			key,
			result,
			value
		}) => {
			result[String(key).toLowerCase()] = value;
		})).to.deep.equal({})
	});
	test('throws when first param is missing', () => {
		const fn = () =>
			// @ts-expect-error Expected 2 arguments, but got 0
			mapKeys();
		expect(fn).to.throw(TypeError);
		expect(fn).to.throw('mapKeys: First param must be an object! got:undefined');
	});
	test('throws when first param is not an object, but []', () => {
		const fn = () =>
			// @ts-expect-error Expected 2 arguments, but got 1
			mapKeys([]);
		expect(fn).to.throw(TypeError);
		expect(fn).to.throw('mapKeys: First param must be an object! got:[]');
	});
	test('throws when first param is not an object, but 1', () => {
		const fn = () =>
			// @ts-expect-error Argument of type 'number' is not assignable to parameter of type 'object'.ts(2345)
			mapKeys(1, ({
				key,
				result,
				value
			}) => {
				result[String(key).toLowerCase()] = value;
			});
		expect(fn).to.throw(TypeError);
		expect(fn).to.throw('mapKeys: First param must be an object! got:1');
	});
});

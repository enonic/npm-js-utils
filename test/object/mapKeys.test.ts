import { expect } from 'chai';
import { mapKeys } from '../../index';


describe('mapKeys', () => {
	it('can be used to transform keys', () => {
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

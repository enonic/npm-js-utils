import { expect } from 'chai';
import { lcKeys } from '@enonic/js-utils';


describe('lcKeys', () => {
	it('can be used to transform keys', () => {
		expect(lcKeys({
			Accept: 'text/html',
			'Accept-Encoding': 'gzip, deflate, br'
		})).to.deep.equal({
			accept: 'text/html',
			'accept-encoding': 'gzip, deflate, br'
		}, )
	});
});

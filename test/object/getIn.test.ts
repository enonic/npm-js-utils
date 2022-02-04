import {assert} from 'chai';
import { getIn } from '../../src';


const {
	equal,
	isUndefined
} = assert;


describe('getIn', () => {
	const obj = { very: { deep: { key: 1 }}, simple: 2 };

    it('should get value using dot notation', () => {
      equal(getIn(obj, 'very.deep.key'), 1);
    });

    it('should get value without dot', () => {
      equal(getIn(obj, 'simple'), 2);
    });

    it('should accept a default value', () => {
      isUndefined(getIn(obj, 'not exist'));
      equal(getIn(obj, 'not exist', ''), '');
    });
}); // describe getIn

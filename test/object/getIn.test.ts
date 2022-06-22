import {assert} from 'chai';
import { getIn } from '../../src';


const {
	equal,
	isUndefined
} = assert;

const VERY_DEEP_KEY_VALUE = 'veryDeepKeyValue';

const INDEX_ZERO = 'index zero';


describe('getIn', () => {
	const obj = {
		arr: [INDEX_ZERO],
		very: { deep: { key: VERY_DEEP_KEY_VALUE }},
		simple: 2
	};
	const arr = [INDEX_ZERO, obj];

	it('should get value using dot notation', () => {
		equal(getIn(obj, 'very.deep.key'), VERY_DEEP_KEY_VALUE);
	});

	it('should get value without dot', () => {
		equal(getIn(obj, 'simple'), 2);
	});

	it('should accept a default value', () => {
		isUndefined(getIn(obj, 'not exist'));
		equal(getIn(obj, 'not exist', ''), '');
	});

	it('should support array with objects, and object with arrays', () => {
		isUndefined(getIn([], 0));
		equal(getIn([], 'not exist', ''), '');

		equal(getIn(arr, 0), INDEX_ZERO);
		equal(getIn(arr, '1.very.deep.key'), VERY_DEEP_KEY_VALUE);
		isUndefined(getIn(arr, 2));
		equal(getIn(arr, 'not exist', ''), '');

		equal(getIn(obj, 'arr.0'), INDEX_ZERO);
	});
}); // describe getIn

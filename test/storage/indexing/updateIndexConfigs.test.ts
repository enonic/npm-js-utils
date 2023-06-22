import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
//import {print} from 'q-i';
import {updateIndexConfigs} from '../../../index';


const CONFIG_ALL_FALSE = {
	enabled: false,
	decideByType: false,
	fulltext: false,
	includeInAllText: false,
	indexValueProcessors: [],
	languages: [],
	nGram: false,
	path: false,
};

const CONFIG_ALL_TRUE = {
	enabled: true,
	decideByType: true,
	fulltext: true,
	includeInAllText: true,
	indexValueProcessors: [],
	languages: [],
	nGram: true,
	path: true,
};


describe('updateIndexConfigs', () => {
	test('orders an existing indexConfigs', () => {
		deepStrictEqual(
			[{
				path: 'a',
				config: CONFIG_ALL_FALSE
			},{
				path: 'b',
				config: CONFIG_ALL_FALSE
			}], // Ordered
			updateIndexConfigs({
				configs: [{
					path: 'b',
					config: CONFIG_ALL_FALSE
				},{
					path: 'a',
					config: CONFIG_ALL_FALSE
				}],
				updates: []
			})
		);
	});
	test('adds and orders to an empty indexConfigs', () => {
		deepStrictEqual(
			[{
				path: 'a',
				config: CONFIG_ALL_TRUE // Added
			},{
				path: 'b',
				config: CONFIG_ALL_TRUE // Added
			}], // Ordered
			updateIndexConfigs({
				configs: [],
				updates: [{
					path: 'b',
					config: CONFIG_ALL_TRUE
				},{
					path: 'a',
					config: CONFIG_ALL_TRUE
				}]
			})
		);
	});
	test('adds, replaces, orderd and leaves previous alone in an non-empty indexConfigs', () => {
		deepStrictEqual(
			[{
				path: 'a',
				config: CONFIG_ALL_FALSE // Untouched
			},{
				path: 'b',
				config: CONFIG_ALL_TRUE // Replaced
			},{
				path: 'c',
				config: CONFIG_ALL_TRUE // Added
			},{
				path: 'd',
				config: CONFIG_ALL_FALSE // Untouched
			}], // Ordered
			updateIndexConfigs({
				configs: [{
					path: 'd',
					config: CONFIG_ALL_FALSE
				},{
					path: 'b',
					config: CONFIG_ALL_FALSE
				},{
					path: 'a',
					config: CONFIG_ALL_FALSE
				}],
				updates: [{
					path: 'c',
					config: CONFIG_ALL_TRUE
				},{
					path: 'b',
					config: CONFIG_ALL_TRUE
				}]
			})
		);
	});
}); // updateIndexConfigs

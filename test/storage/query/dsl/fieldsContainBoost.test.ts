import type {Fields} from '../../../../storage/query/constants';

import {equal} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {fieldsContainBoost} from '../../../../storage/query/dsl/fieldsContainBoost';

const TESTS_NEGATIVE = [
	'_allText',
	{
		field: '_allText'
	},
	{
		field: '_allText',
		boost: -0
	},
	{
		field: '_allText',
		boost: 0
	},
	{
		field: '_allText',
		boost: 1
	},
	// {
	// 	field: '_allText',
	// 	boost: 1.0 // just becomes 1
	// }
	['_allText'],
	[{
		field: '_allText',
		boost: 0
	}],
	[
		'_allText',
		{
			field: '_allText',
			boost: 1
		}
	]
];

const TESTS_POSITIVE = [
	'_allText^-1.1',
	'_allText^-1',
	'_allText^-0.1',
	'_allText^-0', // "invalid"
	'_allText^',
	'_allText^0', // "invalid"
	'_allText^0.1',
	'_allText^1', // useless
	'_allText^1.1',
	{
		field: '_allText',
		boost: -1.1
	},
	{
		field: '_allText',
		boost: -1
	},
	{
		field: '_allText',
		boost: -0.1
	},
	{
		field: '_allText',
		boost: 0.1
	},
	{
		field: '_allText',
		boost: 1.1
	},
	['_allText','_allText^'],
	[{
		field: '_allText'
	},{
		field: '_allText',
		boost: 1.1
	}],
	[
		'_allText',
		{
			field: '_allText',
			boost: 1.1
		}
	]
];


describe('fieldsContainBoost', () => {
	describe('--> false', () => {
		for (let i = 0; i < TESTS_NEGATIVE.length; i++) {
			const fields = TESTS_NEGATIVE[i] as Fields;
			test(JSON.stringify(fields), () => {
				equal(
					false,
					fieldsContainBoost(fields)
				)
			});
		}
	});
	describe('--> true', () => {
		for (let i = 0; i < TESTS_POSITIVE.length; i++) {
			const fields = TESTS_POSITIVE[i] as Fields;
			test(JSON.stringify(fields), () => {
				equal(
					true,
					fieldsContainBoost(fields)
				)
			});
		}
	});
});

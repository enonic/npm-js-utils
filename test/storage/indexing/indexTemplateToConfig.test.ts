import {deepStrictEqual} from 'assert';
import {
	describe,
	// expect,
	test
} from '@jest/globals';
import {
	INDEX_CONFIG_TEMPLATE_NONE,
	INDEX_CONFIG_TEMPLATE_BY_TYPE,
	INDEX_CONFIG_TEMPLATE_FULLTEXT,
	INDEX_CONFIG_TEMPLATE_PATH,
	INDEX_CONFIG_TEMPLATE_MINIMAL,
	indexTemplateToConfig
} from '../../../index';


describe('indexTemplateToConfig', () => {
	test(`${INDEX_CONFIG_TEMPLATE_NONE}`, () => {
		deepStrictEqual(
			{
				decideByType: false,
				enabled: false,
				fulltext: false,
				includeInAllText: false,
				nGram: false,
				path: false
			},
			indexTemplateToConfig({
				template: INDEX_CONFIG_TEMPLATE_NONE
			})
		);
	});
	test(`${INDEX_CONFIG_TEMPLATE_BY_TYPE}`, () => {
		deepStrictEqual(
			{
				decideByType: true,
				enabled: true,
				fulltext: false,
				includeInAllText: false,
				nGram: false,
				path: false
			},
			indexTemplateToConfig({
				template: INDEX_CONFIG_TEMPLATE_BY_TYPE
			})
		);
	});
	test(`${INDEX_CONFIG_TEMPLATE_FULLTEXT}`, () => {
		deepStrictEqual(
			{
				decideByType: false,
				enabled: true,
				fulltext: true,
				includeInAllText: true,
				nGram: true,
				path: false
			},
			indexTemplateToConfig({
				template: INDEX_CONFIG_TEMPLATE_FULLTEXT
			})
		);
	});
	test(`${INDEX_CONFIG_TEMPLATE_PATH}`, () => {
		deepStrictEqual(
			{
				decideByType: false,
				enabled: true,
				fulltext: false,
				includeInAllText: false,
				nGram: false,
				path: true
			},
			indexTemplateToConfig({
				template: INDEX_CONFIG_TEMPLATE_PATH
			})
		);
	});
	test(`${INDEX_CONFIG_TEMPLATE_MINIMAL}`, () => {
		deepStrictEqual(
			{
				decideByType: false,
				enabled: true,
				fulltext: false,
				includeInAllText: false,
				nGram: false,
				path: false
			},
			indexTemplateToConfig({
				template: INDEX_CONFIG_TEMPLATE_MINIMAL
			})
		);
	});
});

import {deepStrictEqual} from 'assert';
import {
	INDEX_CONFIG_TEMPLATE_NONE,
	INDEX_CONFIG_TEMPLATE_BY_TYPE,
	INDEX_CONFIG_TEMPLATE_FULLTEXT,
	INDEX_CONFIG_TEMPLATE_PATH,
	INDEX_CONFIG_TEMPLATE_MINIMAL,
	indexTemplateToConfig
} from '../../../dist/esm/index.mjs';


describe('indexTemplateToConfig', () => {
	it(`${INDEX_CONFIG_TEMPLATE_NONE}`, () => {
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
	it(`${INDEX_CONFIG_TEMPLATE_BY_TYPE}`, () => {
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
	it(`${INDEX_CONFIG_TEMPLATE_FULLTEXT}`, () => {
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
	it(`${INDEX_CONFIG_TEMPLATE_PATH}`, () => {
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
	it(`${INDEX_CONFIG_TEMPLATE_MINIMAL}`, () => {
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

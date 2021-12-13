import type { IndexConfigEntry } from '/lib/xp/node';

import {isObject} from '../../value';

import {
	INDEX_CONFIG_ENABLED,
	INDEX_CONFIG_DECIDE_BY_TYPE,
	INDEX_CONFIG_FULLTEXT,
	INDEX_CONFIG_INCLUDE_IN_ALL_TEXT,
	INDEX_CONFIG_INDEX_VALUE_PROCESSORS,
	INDEX_CONFIG_LANGUAGES,
	INDEX_CONFIG_N_GRAM,
	INDEX_CONFIG_PATH,
	INDEX_CONFIG_TEMPLATE_NONE,
	INDEX_CONFIG_TEMPLATE_BY_TYPE,
	INDEX_CONFIG_TEMPLATE_FULLTEXT,
	INDEX_CONFIG_TEMPLATE_PATH,
	INDEX_CONFIG_TEMPLATE_MINIMAL,
	INDEX_CONFIG_TEMPLATES
} from './constants';

type IndexConfigTemplates = typeof INDEX_CONFIG_TEMPLATES[number];

type PartialIndexConfigEntry = Partial<IndexConfigEntry>;

interface IndexTemplateToConfigParam {
	template: IndexConfigTemplates | IndexConfigEntry,
	indexValueProcessors?: [],
	languages?: []
}


export function indexTemplateToConfig({
	template,
	indexValueProcessors = [],
	languages = []
}: IndexTemplateToConfigParam): IndexConfigEntry {
	if (isObject(template)) {
		const configObject:IndexConfigEntry = JSON.parse(JSON.stringify(template)); // dereference
		configObject.indexValueProcessors = indexValueProcessors;
		configObject.languages = languages;
		// TODO path: true becomes false
		return configObject;
	}
	if (template === INDEX_CONFIG_TEMPLATE_NONE) {
		const rv :PartialIndexConfigEntry = {
			[INDEX_CONFIG_DECIDE_BY_TYPE]: false,
			[INDEX_CONFIG_ENABLED]: false,
			[INDEX_CONFIG_FULLTEXT]: false,
			[INDEX_CONFIG_INCLUDE_IN_ALL_TEXT]: false
		};
		if (indexValueProcessors) {
			rv[INDEX_CONFIG_INDEX_VALUE_PROCESSORS] = indexValueProcessors;
		}
		if (languages) {
			rv[INDEX_CONFIG_LANGUAGES] = languages;
		}
		rv[INDEX_CONFIG_N_GRAM] = false;
		rv[INDEX_CONFIG_PATH] = false;
		return rv as IndexConfigEntry;
	}
	if (template === INDEX_CONFIG_TEMPLATE_BY_TYPE) {
		const rv :PartialIndexConfigEntry = {
			[INDEX_CONFIG_DECIDE_BY_TYPE]: true,
			[INDEX_CONFIG_ENABLED]: true,
			[INDEX_CONFIG_FULLTEXT]: false,
			[INDEX_CONFIG_INCLUDE_IN_ALL_TEXT]: false
		};
		if (indexValueProcessors) {
			rv[INDEX_CONFIG_INDEX_VALUE_PROCESSORS] = indexValueProcessors;
		}
		if (languages) {
			rv[INDEX_CONFIG_LANGUAGES] = languages;
		}
		rv[INDEX_CONFIG_N_GRAM] = false;
		rv[INDEX_CONFIG_PATH] = false;
		return rv as IndexConfigEntry;
	}
	if (template === INDEX_CONFIG_TEMPLATE_FULLTEXT) {
		const rv :PartialIndexConfigEntry = {
			[INDEX_CONFIG_DECIDE_BY_TYPE]: false,
			[INDEX_CONFIG_ENABLED]: true,
			[INDEX_CONFIG_FULLTEXT]: true,
			[INDEX_CONFIG_INCLUDE_IN_ALL_TEXT]: true
		};
		if (indexValueProcessors) {
			rv[INDEX_CONFIG_INDEX_VALUE_PROCESSORS] = indexValueProcessors;
		}
		if (languages) {
			rv[INDEX_CONFIG_LANGUAGES] = languages;
		}
		rv[INDEX_CONFIG_N_GRAM] = true;
		rv[INDEX_CONFIG_PATH] = false;
		return rv as IndexConfigEntry;
	}
	if (template === INDEX_CONFIG_TEMPLATE_PATH) {
		const rv :PartialIndexConfigEntry = {
			[INDEX_CONFIG_DECIDE_BY_TYPE]: false,
			[INDEX_CONFIG_ENABLED]: true,
			[INDEX_CONFIG_FULLTEXT]: false,
			[INDEX_CONFIG_INCLUDE_IN_ALL_TEXT]: false
		};
		if (indexValueProcessors) {
			rv[INDEX_CONFIG_INDEX_VALUE_PROCESSORS] = indexValueProcessors;
		}
		if (languages) {
			rv[INDEX_CONFIG_LANGUAGES] = languages;
		}
		rv[INDEX_CONFIG_N_GRAM] = false;
		rv[INDEX_CONFIG_PATH] = true;
		return rv as IndexConfigEntry;
	}
	if (template === INDEX_CONFIG_TEMPLATE_MINIMAL) {
		const rv :PartialIndexConfigEntry = {
			[INDEX_CONFIG_DECIDE_BY_TYPE]: false,
			[INDEX_CONFIG_ENABLED]: true,
			[INDEX_CONFIG_FULLTEXT]: false,
			[INDEX_CONFIG_INCLUDE_IN_ALL_TEXT]: false
		};
		if (indexValueProcessors) {
			rv[INDEX_CONFIG_INDEX_VALUE_PROCESSORS] = indexValueProcessors;
		}
		if (languages) {
			rv[INDEX_CONFIG_LANGUAGES] = languages;
		}
		rv[INDEX_CONFIG_N_GRAM] = false;
		rv[INDEX_CONFIG_PATH] = false;
		return rv as IndexConfigEntry;
	}
	throw new Error(`Unknown indexing template:${template}!`);
}

import type {IndexConfigEntry} from './IndexConfig';

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

interface IndexConfigEntryUnderConstruction {
	decideByType?: boolean;
    enabled?: boolean;
    nGram?: boolean;
    fulltext?: boolean;
    includeInAllText?: boolean;
    path?: boolean;
    indexValueProcessors?: Array<unknown>;
    languages?: Array<unknown>;
}

interface indexTemplateToConfigParam {
	template: IndexConfigTemplates | IndexConfigEntry,
	indexValueProcessors?: [],
	languages? :string[]
}


export function indexTemplateToConfig({
	template,
	indexValueProcessors,// = [],
	languages// = []
}: indexTemplateToConfigParam): IndexConfigEntry {
	if (isObject(template)) {
		const configObject:IndexConfigEntry = JSON.parse(JSON.stringify(template)); // dereference
		configObject.indexValueProcessors = indexValueProcessors;
		configObject.languages = languages;
		// TODO path: true becomes false
		return configObject;
	}
	if (template === INDEX_CONFIG_TEMPLATE_NONE) {
		const rv :IndexConfigEntryUnderConstruction = {
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
		const rv :IndexConfigEntryUnderConstruction = {
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
		const rv :IndexConfigEntryUnderConstruction = {
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
		const rv :IndexConfigEntryUnderConstruction = {
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
		const rv :IndexConfigEntryUnderConstruction = {
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

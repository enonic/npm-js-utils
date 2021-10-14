/*import {
	IndexConfigEntry,
	IndexConfigTemplates
} from 'enonic-types/node';*/

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


interface IndexConfigEntry {
  /**
   * If true, indexing is done based on valueType, according to the table above. I.e. numeric values are indexed as
   * both string and numeric.
   */
  readonly decideByType: boolean;

  /**
   * If false, indexing will be disabled for the affected properties
   */
  readonly enabled: boolean;

  /**
   * Values are stored as 'ngram'
   */
  readonly nGram: boolean;

  /**
   * Values are stored as 'ngram', 'analyzed' and also added to the _allText system property
   */
  readonly fulltext: boolean;

  /**
   * Affected values will be added to the _allText property
   */
  readonly includeInAllText: boolean;

  /**
   * Values are stored as 'path' type and applicable for the pathMatch-function
   */
  readonly path: boolean;

  indexValueProcessors?: ReadonlyArray<any>;
  languages?: ReadonlyArray<any>;
}


interface indexTemplateToConfigParam {
	template: IndexConfigTemplates | IndexConfigEntry,
	indexValueProcessors?: [],
	languages?: []
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
		const rv = {
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
		const rv = {
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
		const rv = {
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
		const rv = {
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
		const rv = {
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

/*import {
	IndexConfigEntry,
	IndexConfigTemplates
} from 'enonic-types/node';*/

import {isObject} from '../../value';

import {
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

  indexValueProcessors: ReadonlyArray<any>;
  languages: ReadonlyArray<any>;
}


interface indexTemplateToConfigParam {
	template: IndexConfigTemplates | IndexConfigEntry,
	indexValueProcessors: [],
	languages: []
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
		return {
			enabled: false,
			decideByType: false,
			nGram: false,
			fulltext: false,
			includeInAllText: false,
			path: false,
			indexValueProcessors,
			languages
		};
	}
	if (template === INDEX_CONFIG_TEMPLATE_BY_TYPE) {
		return {
			enabled: true,
			decideByType: true,
			nGram: false,
			fulltext: false,
			includeInAllText: false,
			path: false,
			indexValueProcessors,
			languages
		};
	}
	if (template === INDEX_CONFIG_TEMPLATE_FULLTEXT) {
		return {
			enabled: true,
			decideByType: false,
			nGram: true,
			fulltext: true,
			includeInAllText: true,
			path: false,
			indexValueProcessors,
			languages
		};
	}
	if (template === INDEX_CONFIG_TEMPLATE_PATH) {
		return {
			enabled: true,
			decideByType: false,
			nGram: false,
			fulltext: false,
			includeInAllText: false,
			path: true,
			indexValueProcessors,
			languages
		};
	}
	if (template === INDEX_CONFIG_TEMPLATE_MINIMAL) {
		return {
			enabled: true,
			decideByType: false,
			nGram: false,
			fulltext: false,
			includeInAllText: false,
			path: false,
			indexValueProcessors,
			languages
		};
	}
	throw new Error(`Unknown indexing template:${template}!`);
}

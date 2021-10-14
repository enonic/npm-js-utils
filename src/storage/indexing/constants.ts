export const INDEX_CONFIG_ENABLED = 'enabled';
export const INDEX_CONFIG_DECIDE_BY_TYPE = 'decideByType';
export const INDEX_CONFIG_FULLTEXT = 'fulltext';
export const INDEX_CONFIG_INCLUDE_IN_ALL_TEXT = 'includeInAllText';
export const INDEX_CONFIG_INDEX_VALUE_PROCESSORS = 'indexValueProcessors';
export const INDEX_CONFIG_LANGUAGES = 'languages';
export const INDEX_CONFIG_N_GRAM = 'nGram'; // Yes big G 🤦
export const INDEX_CONFIG_PATH = 'path';

// Same as template byType (which is the default template)
export const INDEX_CONFIG_ENABLED_DEFAULT = true;
export const INDEX_CONFIG_DECIDE_BY_TYPE_DEFAULT = true;
export const INDEX_CONFIG_FULLTEXT_DEFAULT = false;
export const INDEX_CONFIG_INCLUDE_IN_ALL_TEXT_DEFAULT = false;
export const INDEX_CONFIG_N_GRAM_DEFAULT = false;
export const INDEX_CONFIG_PATH_DEFAULT = false;

export const INDEX_CONFIG_TEMPLATE_NONE = 'none';
export const INDEX_CONFIG_TEMPLATE_BY_TYPE = 'byType';
export const INDEX_CONFIG_TEMPLATE_FULLTEXT = 'fulltext';
export const INDEX_CONFIG_TEMPLATE_PATH = 'path';
export const INDEX_CONFIG_TEMPLATE_MINIMAL = 'minimal';

export const INDEX_CONFIG_TEMPLATES = [
	INDEX_CONFIG_TEMPLATE_NONE,
	INDEX_CONFIG_TEMPLATE_BY_TYPE,
	INDEX_CONFIG_TEMPLATE_FULLTEXT,
	INDEX_CONFIG_TEMPLATE_PATH,
	INDEX_CONFIG_TEMPLATE_MINIMAL
] as const;

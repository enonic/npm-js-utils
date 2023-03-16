export const INDEX_CONFIG_ENABLED = 'enabled' as const;
export const INDEX_CONFIG_DECIDE_BY_TYPE = 'decideByType' as const;
export const INDEX_CONFIG_FULLTEXT = 'fulltext' as const;
export const INDEX_CONFIG_INCLUDE_IN_ALL_TEXT = 'includeInAllText' as const;
export const INDEX_CONFIG_INDEX_VALUE_PROCESSORS = 'indexValueProcessors' as const;
export const INDEX_CONFIG_LANGUAGES = 'languages' as const;
export const INDEX_CONFIG_N_GRAM = 'nGram' as const; // Yes big G 🤦
export const INDEX_CONFIG_PATH = 'path' as const;

// Same as template byType (which is the default template)
export const INDEX_CONFIG_ENABLED_DEFAULT = true;
export const INDEX_CONFIG_DECIDE_BY_TYPE_DEFAULT = true;
export const INDEX_CONFIG_FULLTEXT_DEFAULT = false;
export const INDEX_CONFIG_INCLUDE_IN_ALL_TEXT_DEFAULT = false;
export const INDEX_CONFIG_N_GRAM_DEFAULT = false;
export const INDEX_CONFIG_PATH_DEFAULT = false;

export const INDEX_CONFIG_TEMPLATE_NONE = 'none' as const;
export const INDEX_CONFIG_TEMPLATE_BY_TYPE = 'byType' as const;
export const INDEX_CONFIG_TEMPLATE_FULLTEXT = 'fulltext' as const;
export const INDEX_CONFIG_TEMPLATE_PATH = 'path' as const;
export const INDEX_CONFIG_TEMPLATE_MINIMAL = 'minimal' as const;

export const INDEX_CONFIG_TEMPLATES = [
	INDEX_CONFIG_TEMPLATE_NONE,
	INDEX_CONFIG_TEMPLATE_BY_TYPE,
	INDEX_CONFIG_TEMPLATE_FULLTEXT,
	INDEX_CONFIG_TEMPLATE_PATH,
	INDEX_CONFIG_TEMPLATE_MINIMAL
] as const;

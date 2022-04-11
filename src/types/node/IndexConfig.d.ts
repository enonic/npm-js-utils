export interface IndexConfigEntry {
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

  indexValueProcessors?: ReadonlyArray<unknown>;
  languages?: ReadonlyArray<unknown>;
}

export type IndexConfigTemplates = "none" | "byType" | "fulltext" | "path" | "minimal";

export interface IndexConfig {
	default: IndexConfigEntry | IndexConfigTemplates;
	configs?: ReadonlyArray<{
		path: string;
		config: IndexConfigEntry | IndexConfigTemplates;
	}>;
}

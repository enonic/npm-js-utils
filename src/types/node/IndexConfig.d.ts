export type IndexConfigEntry = {
  /**
   * If true, indexing is done based on valueType, according to the table above. I.e. numeric values are indexed as
   * both string and numeric.
   */
  decideByType :boolean

  /**
   * If false, indexing will be disabled for the affected properties
   */
  enabled :boolean

  /**
   * Values are stored as 'ngram'
   */
  nGram :boolean

  /**
   * Values are stored as 'ngram', 'analyzed' and also added to the _allText system property
   */
  fulltext :boolean

  /**
   * Affected values will be added to the _allText property
   */
  includeInAllText :boolean

  /**
   * Values are stored as 'path' type and applicable for the pathMatch-function
   */
  path :boolean

  indexValueProcessors ?:Array<unknown>
  languages ?:Array<unknown>
}

export type IndexConfigTemplates = "none" | "byType" | "fulltext" | "path" | "minimal"

export type IndexConfig = {
	default :IndexConfigEntry | IndexConfigTemplates
	configs ?:Array<{
		path :string
		config :IndexConfigEntry | IndexConfigTemplates
	}>
}

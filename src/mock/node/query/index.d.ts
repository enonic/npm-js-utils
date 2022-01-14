import type {Aggregation} from './aggregation.d';
import type {
	BasicFilters,
	BooleanFilter
} from './filters.d';
import type {Highlight} from './highlight.d';


export interface NodeQueryParams<AggregationKeys extends string = never> {
	/**
	* Start index (used for paging).
	*/
	start?: number;

	/**
	* Number of contents to fetch.
	*/
	count?: number;

	/**
	* Query expression.
	*/
	query?: string;

	/**
	* Query filters
	*/
	filters?: BasicFilters | BooleanFilter;

	/**
	* Sorting expression.
	*/
	sort?: string;

	/**
	* Aggregations expression.
	*/
	aggregations?: Record<AggregationKeys, Aggregation>;

	/**
	* Highlighting config
	*/
	highlight?: Highlight;

	/**
	* Return score calculation explanation.
	*/
	explain?: boolean;
}

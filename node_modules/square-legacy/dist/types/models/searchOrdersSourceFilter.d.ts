import { Schema } from '../schema';
/** A filter based on order `source` information. */
export interface SearchOrdersSourceFilter {
    /**
     * Filters by the [Source](entity:OrderSource) `name`. The filter returns any orders
     * with a `source.name` that matches any of the listed source names.
     * Max: 10 source names.
     */
    sourceNames?: string[] | null;
}
export declare const searchOrdersSourceFilterSchema: Schema<SearchOrdersSourceFilter>;

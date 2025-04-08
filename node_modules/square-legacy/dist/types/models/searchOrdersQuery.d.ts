import { Schema } from '../schema';
import { SearchOrdersFilter } from './searchOrdersFilter';
import { SearchOrdersSort } from './searchOrdersSort';
/** Contains query criteria for the search. */
export interface SearchOrdersQuery {
    /**
     * Filtering criteria to use for a `SearchOrders` request. Multiple filters
     * are ANDed together.
     */
    filter?: SearchOrdersFilter;
    /**
     * Sorting criteria for a `SearchOrders` request. Results can only be sorted
     * by a timestamp field.
     */
    sort?: SearchOrdersSort;
}
export declare const searchOrdersQuerySchema: Schema<SearchOrdersQuery>;

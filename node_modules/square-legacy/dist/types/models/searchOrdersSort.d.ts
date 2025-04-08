import { Schema } from '../schema';
/**
 * Sorting criteria for a `SearchOrders` request. Results can only be sorted
 * by a timestamp field.
 */
export interface SearchOrdersSort {
    /** Specifies which timestamp to use to sort `SearchOrder` results. */
    sortField: string;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
}
export declare const searchOrdersSortSchema: Schema<SearchOrdersSort>;

import { Schema } from '../schema';
import { SearchVendorsRequestFilter } from './searchVendorsRequestFilter';
import { SearchVendorsRequestSort } from './searchVendorsRequestSort';
/** Represents an input into a call to [SearchVendors]($e/Vendors/SearchVendors). */
export interface SearchVendorsRequest {
    /** Defines supported query expressions to search for vendors by. */
    filter?: SearchVendorsRequestFilter;
    /** Defines a sorter used to sort results from [SearchVendors]($e/Vendors/SearchVendors). */
    sort?: SearchVendorsRequestSort;
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this to retrieve the next set of results for the original query.
     * See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     */
    cursor?: string;
}
export declare const searchVendorsRequestSchema: Schema<SearchVendorsRequest>;

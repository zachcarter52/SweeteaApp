import { Schema } from '../schema';
import { SearchOrdersQuery } from './searchOrdersQuery';
export interface SearchOrdersRequest {
    /**
     * The location IDs for the orders to query. All locations must belong to
     * the same merchant.
     * Max: 10 location IDs.
     */
    locationIds?: string[];
    /**
     * A pagination cursor returned by a previous call to this endpoint.
     * Provide this cursor to retrieve the next set of results for your original query.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** Contains query criteria for the search. */
    query?: SearchOrdersQuery;
    /**
     * The maximum number of results to be returned in a single page.
     * Default: `500`
     * Max: `1000`
     */
    limit?: number;
    /**
     * A Boolean that controls the format of the search results. If `true`,
     * `SearchOrders` returns [OrderEntry](entity:OrderEntry) objects. If `false`, `SearchOrders`
     * returns complete order objects.
     * Default: `false`.
     */
    returnEntries?: boolean;
}
export declare const searchOrdersRequestSchema: Schema<SearchOrdersRequest>;

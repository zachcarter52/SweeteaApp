import { Schema } from '../schema';
import { Error } from './error';
import { Order } from './order';
import { OrderEntry } from './orderEntry';
/**
 * Either the `order_entries` or `orders` field is set, depending on whether
 * `return_entries` is set on the [SearchOrdersRequest]($e/Orders/SearchOrders).
 */
export interface SearchOrdersResponse {
    /**
     * A list of [OrderEntries](entity:OrderEntry) that fit the query
     * conditions. The list is populated only if `return_entries` is set to `true` in the request.
     */
    orderEntries?: OrderEntry[];
    /**
     * A list of
     * [Order](entity:Order) objects that match the query conditions. The list is populated only if
     * `return_entries` is set to `false` in the request.
     */
    orders?: Order[];
    /**
     * The pagination cursor to be used in a subsequent request. If unset,
     * this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
    /** [Errors](entity:Error) encountered during the search. */
    errors?: Error[];
}
export declare const searchOrdersResponseSchema: Schema<SearchOrdersResponse>;

import { Schema } from '../schema';
import { Error } from './error';
import { Subscription } from './subscription';
/**
 * Defines output parameters in a response from the
 * [SearchSubscriptions]($e/Subscriptions/SearchSubscriptions) endpoint.
 */
export interface SearchSubscriptionsResponse {
    /** Errors encountered during the request. */
    errors?: Error[];
    /** The subscriptions matching the specified query expressions. */
    subscriptions?: Subscription[];
    /**
     * When the total number of resulting subscription exceeds the limit of a paged response,
     * the response includes a cursor for you to use in a subsequent request to fetch the next set of results.
     * If the cursor is unset, the response contains the last page of the results.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const searchSubscriptionsResponseSchema: Schema<SearchSubscriptionsResponse>;

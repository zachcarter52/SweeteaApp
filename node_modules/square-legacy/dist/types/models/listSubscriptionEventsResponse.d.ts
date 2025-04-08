import { Schema } from '../schema';
import { Error } from './error';
import { SubscriptionEvent } from './subscriptionEvent';
/**
 * Defines output parameters in a response from the
 * [ListSubscriptionEvents]($e/Subscriptions/ListSubscriptionEvents).
 */
export interface ListSubscriptionEventsResponse {
    /** Errors encountered during the request. */
    errors?: Error[];
    /** The retrieved subscription events. */
    subscriptionEvents?: SubscriptionEvent[];
    /**
     * When the total number of resulting subscription events exceeds the limit of a paged response,
     * the response includes a cursor for you to use in a subsequent request to fetch the next set of events.
     * If the cursor is unset, the response contains the last page of the results.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const listSubscriptionEventsResponseSchema: Schema<ListSubscriptionEventsResponse>;

import { Schema } from '../schema';
import { Error } from './error';
import { LoyaltyEvent } from './loyaltyEvent';
/**
 * A response that contains loyalty events that satisfy the search
 * criteria, in order by the `created_at` date.
 */
export interface SearchLoyaltyEventsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The loyalty events that satisfy the search criteria. */
    events?: LoyaltyEvent[];
    /**
     * The pagination cursor to be used in a subsequent
     * request. If empty, this is the final response.
     * For more information,
     * see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const searchLoyaltyEventsResponseSchema: Schema<SearchLoyaltyEventsResponse>;

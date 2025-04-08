import { Schema } from '../schema';
import { Error } from './error';
import { GiftCardActivity } from './giftCardActivity';
/**
 * A response that contains a list of `GiftCardActivity` objects. If the request resulted in errors,
 * the response contains a set of `Error` objects.
 */
export interface ListGiftCardActivitiesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The requested gift card activities or an empty object if none are found. */
    giftCardActivities?: GiftCardActivity[];
    /**
     * When a response is truncated, it includes a cursor that you can use in a
     * subsequent request to retrieve the next set of activities. If a cursor is not present, this is
     * the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination).
     */
    cursor?: string;
}
export declare const listGiftCardActivitiesResponseSchema: Schema<ListGiftCardActivitiesResponse>;

import { Schema } from '../schema';
import { Error } from './error';
import { WebhookSubscription } from './webhookSubscription';
/**
 * Defines the fields that are included in the response body of
 * a request to the [ListWebhookSubscriptions]($e/WebhookSubscriptions/ListWebhookSubscriptions) endpoint.
 * Note: if there are errors processing the request, the subscriptions field will not be
 * present.
 */
export interface ListWebhookSubscriptionsResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** The requested list of [Subscription](entity:WebhookSubscription)s. */
    subscriptions?: WebhookSubscription[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * For more information, see [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination).
     */
    cursor?: string;
}
export declare const listWebhookSubscriptionsResponseSchema: Schema<ListWebhookSubscriptionsResponse>;

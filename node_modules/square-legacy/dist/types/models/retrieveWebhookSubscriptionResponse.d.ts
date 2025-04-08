import { Schema } from '../schema';
import { Error } from './error';
import { WebhookSubscription } from './webhookSubscription';
/**
 * Defines the fields that are included in the response body of
 * a request to the [RetrieveWebhookSubscription]($e/WebhookSubscriptions/RetrieveWebhookSubscription) endpoint.
 * Note: if there are errors processing the request, the [Subscription]($m/WebhookSubscription) will not be
 * present.
 */
export interface RetrieveWebhookSubscriptionResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents the details of a webhook subscription, including notification URL,
     * event types, and signature key.
     */
    subscription?: WebhookSubscription;
}
export declare const retrieveWebhookSubscriptionResponseSchema: Schema<RetrieveWebhookSubscriptionResponse>;

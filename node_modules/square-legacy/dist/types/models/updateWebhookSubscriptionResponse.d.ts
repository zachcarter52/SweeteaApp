import { Schema } from '../schema';
import { Error } from './error';
import { WebhookSubscription } from './webhookSubscription';
/**
 * Defines the fields that are included in the response body of
 * a request to the [UpdateWebhookSubscription]($e/WebhookSubscriptions/UpdateWebhookSubscription) endpoint.
 * Note: If there are errors processing the request, the [Subscription]($m/WebhookSubscription) is not
 * present.
 */
export interface UpdateWebhookSubscriptionResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /**
     * Represents the details of a webhook subscription, including notification URL,
     * event types, and signature key.
     */
    subscription?: WebhookSubscription;
}
export declare const updateWebhookSubscriptionResponseSchema: Schema<UpdateWebhookSubscriptionResponse>;

import { Schema } from '../schema';
import { WebhookSubscription } from './webhookSubscription';
/** Updates a [Subscription]($m/WebhookSubscription). */
export interface UpdateWebhookSubscriptionRequest {
    /**
     * Represents the details of a webhook subscription, including notification URL,
     * event types, and signature key.
     */
    subscription?: WebhookSubscription;
}
export declare const updateWebhookSubscriptionRequestSchema: Schema<UpdateWebhookSubscriptionRequest>;

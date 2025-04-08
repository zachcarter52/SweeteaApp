import { Schema } from '../schema';
import { WebhookSubscription } from './webhookSubscription';
/** Creates a [Subscription]($m/WebhookSubscription). */
export interface CreateWebhookSubscriptionRequest {
    /** A unique string that identifies the [CreateWebhookSubscription](api-endpoint:WebhookSubscriptions-CreateWebhookSubscription) request. */
    idempotencyKey?: string;
    /**
     * Represents the details of a webhook subscription, including notification URL,
     * event types, and signature key.
     */
    subscription: WebhookSubscription;
}
export declare const createWebhookSubscriptionRequestSchema: Schema<CreateWebhookSubscriptionRequest>;

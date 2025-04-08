import { lazy, object, optional, string } from '../schema';
import { webhookSubscriptionSchema, } from './webhookSubscription';
export const createWebhookSubscriptionRequestSchema = object({
    idempotencyKey: ['idempotency_key', optional(string())],
    subscription: ['subscription', lazy(() => webhookSubscriptionSchema)],
});
//# sourceMappingURL=createWebhookSubscriptionRequest.js.map
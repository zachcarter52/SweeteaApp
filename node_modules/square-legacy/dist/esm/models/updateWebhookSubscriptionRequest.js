import { lazy, object, optional } from '../schema';
import { webhookSubscriptionSchema, } from './webhookSubscription';
export const updateWebhookSubscriptionRequestSchema = object({
    subscription: [
        'subscription',
        optional(lazy(() => webhookSubscriptionSchema)),
    ],
});
//# sourceMappingURL=updateWebhookSubscriptionRequest.js.map
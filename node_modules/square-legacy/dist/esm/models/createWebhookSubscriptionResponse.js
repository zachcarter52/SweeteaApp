import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { webhookSubscriptionSchema, } from './webhookSubscription';
export const createWebhookSubscriptionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: [
        'subscription',
        optional(lazy(() => webhookSubscriptionSchema)),
    ],
});
//# sourceMappingURL=createWebhookSubscriptionResponse.js.map
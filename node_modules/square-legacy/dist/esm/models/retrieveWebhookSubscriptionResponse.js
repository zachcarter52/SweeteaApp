import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { webhookSubscriptionSchema, } from './webhookSubscription';
export const retrieveWebhookSubscriptionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: [
        'subscription',
        optional(lazy(() => webhookSubscriptionSchema)),
    ],
});
//# sourceMappingURL=retrieveWebhookSubscriptionResponse.js.map
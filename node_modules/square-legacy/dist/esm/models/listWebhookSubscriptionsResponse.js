import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { webhookSubscriptionSchema, } from './webhookSubscription';
export const listWebhookSubscriptionsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptions: [
        'subscriptions',
        optional(array(lazy(() => webhookSubscriptionSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listWebhookSubscriptionsResponse.js.map
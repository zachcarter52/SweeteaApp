import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { subscriptionEventSchema, } from './subscriptionEvent';
export const listSubscriptionEventsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptionEvents: [
        'subscription_events',
        optional(array(lazy(() => subscriptionEventSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=listSubscriptionEventsResponse.js.map
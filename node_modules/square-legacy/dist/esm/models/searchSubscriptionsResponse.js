import { array, lazy, object, optional, string } from '../schema';
import { errorSchema } from './error';
import { subscriptionSchema } from './subscription';
export const searchSubscriptionsResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscriptions: [
        'subscriptions',
        optional(array(lazy(() => subscriptionSchema))),
    ],
    cursor: ['cursor', optional(string())],
});
//# sourceMappingURL=searchSubscriptionsResponse.js.map
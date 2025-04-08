import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { subscriptionSchema } from './subscription';
export const retrieveSubscriptionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
});
//# sourceMappingURL=retrieveSubscriptionResponse.js.map
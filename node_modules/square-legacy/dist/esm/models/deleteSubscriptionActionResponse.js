import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { subscriptionSchema } from './subscription';
export const deleteSubscriptionActionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
});
//# sourceMappingURL=deleteSubscriptionActionResponse.js.map
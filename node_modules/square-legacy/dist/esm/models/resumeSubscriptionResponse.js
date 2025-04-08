import { array, lazy, object, optional } from '../schema';
import { errorSchema } from './error';
import { subscriptionSchema } from './subscription';
import { subscriptionActionSchema, } from './subscriptionAction';
export const resumeSubscriptionResponseSchema = object({
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
    subscription: ['subscription', optional(lazy(() => subscriptionSchema))],
    actions: ['actions', optional(array(lazy(() => subscriptionActionSchema)))],
});
//# sourceMappingURL=resumeSubscriptionResponse.js.map
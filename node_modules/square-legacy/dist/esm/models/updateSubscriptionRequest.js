import { lazy, object, optional } from '../schema';
import { subscriptionSchema } from './subscription';
export const updateSubscriptionRequestSchema = object({ subscription: ['subscription', optional(lazy(() => subscriptionSchema))] });
//# sourceMappingURL=updateSubscriptionRequest.js.map
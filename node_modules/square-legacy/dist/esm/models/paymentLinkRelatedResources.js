import { array, lazy, nullable, object, optional } from '../schema';
import { catalogObjectSchema } from './catalogObject';
import { orderSchema } from './order';
export const paymentLinkRelatedResourcesSchema = object({
    orders: ['orders', optional(nullable(array(lazy(() => orderSchema))))],
    subscriptionPlans: [
        'subscription_plans',
        optional(nullable(array(lazy(() => catalogObjectSchema)))),
    ],
});
//# sourceMappingURL=paymentLinkRelatedResources.js.map
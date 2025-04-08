import { lazy, object, optional } from '../schema';
import { orderFulfillmentUpdatedSchema, } from './orderFulfillmentUpdated';
export const orderFulfillmentUpdatedObjectSchema = object({
    orderFulfillmentUpdated: [
        'order_fulfillment_updated',
        optional(lazy(() => orderFulfillmentUpdatedSchema)),
    ],
});
//# sourceMappingURL=orderFulfillmentUpdatedObject.js.map
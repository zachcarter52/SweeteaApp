import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { orderFulfillmentUpdatedUpdateSchema, } from './orderFulfillmentUpdatedUpdate';
export const orderFulfillmentUpdatedSchema = object({
    orderId: ['order_id', optional(nullable(string()))],
    version: ['version', optional(number())],
    locationId: ['location_id', optional(nullable(string()))],
    state: ['state', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    fulfillmentUpdate: [
        'fulfillment_update',
        optional(nullable(array(lazy(() => orderFulfillmentUpdatedUpdateSchema)))),
    ],
});
//# sourceMappingURL=orderFulfillmentUpdated.js.map
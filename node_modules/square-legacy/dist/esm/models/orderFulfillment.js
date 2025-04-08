import { array, dict, lazy, nullable, object, optional, string, } from '../schema';
import { orderFulfillmentDeliveryDetailsSchema, } from './orderFulfillmentDeliveryDetails';
import { orderFulfillmentFulfillmentEntrySchema, } from './orderFulfillmentFulfillmentEntry';
import { orderFulfillmentPickupDetailsSchema, } from './orderFulfillmentPickupDetails';
import { orderFulfillmentShipmentDetailsSchema, } from './orderFulfillmentShipmentDetails';
export const orderFulfillmentSchema = object({
    uid: ['uid', optional(nullable(string()))],
    type: ['type', optional(string())],
    state: ['state', optional(string())],
    lineItemApplication: ['line_item_application', optional(string())],
    entries: [
        'entries',
        optional(array(lazy(() => orderFulfillmentFulfillmentEntrySchema))),
    ],
    metadata: ['metadata', optional(nullable(dict(string())))],
    pickupDetails: [
        'pickup_details',
        optional(lazy(() => orderFulfillmentPickupDetailsSchema)),
    ],
    shipmentDetails: [
        'shipment_details',
        optional(lazy(() => orderFulfillmentShipmentDetailsSchema)),
    ],
    deliveryDetails: [
        'delivery_details',
        optional(lazy(() => orderFulfillmentDeliveryDetailsSchema)),
    ],
});
//# sourceMappingURL=orderFulfillment.js.map
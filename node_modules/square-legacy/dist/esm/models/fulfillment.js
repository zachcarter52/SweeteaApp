import { array, dict, lazy, nullable, object, optional, string, } from '../schema';
import { fulfillmentDeliveryDetailsSchema, } from './fulfillmentDeliveryDetails';
import { fulfillmentFulfillmentEntrySchema, } from './fulfillmentFulfillmentEntry';
import { fulfillmentPickupDetailsSchema, } from './fulfillmentPickupDetails';
import { fulfillmentShipmentDetailsSchema, } from './fulfillmentShipmentDetails';
export const fulfillmentSchema = object({
    uid: ['uid', optional(nullable(string()))],
    type: ['type', optional(string())],
    state: ['state', optional(string())],
    lineItemApplication: ['line_item_application', optional(string())],
    entries: [
        'entries',
        optional(array(lazy(() => fulfillmentFulfillmentEntrySchema))),
    ],
    metadata: ['metadata', optional(nullable(dict(string())))],
    pickupDetails: [
        'pickup_details',
        optional(lazy(() => fulfillmentPickupDetailsSchema)),
    ],
    shipmentDetails: [
        'shipment_details',
        optional(lazy(() => fulfillmentShipmentDetailsSchema)),
    ],
    deliveryDetails: [
        'delivery_details',
        optional(lazy(() => fulfillmentDeliveryDetailsSchema)),
    ],
});
//# sourceMappingURL=fulfillment.js.map
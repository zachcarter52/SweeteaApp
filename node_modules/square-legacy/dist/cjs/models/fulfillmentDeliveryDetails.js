"use strict";
exports.__esModule = true;
exports.fulfillmentDeliveryDetailsSchema = void 0;
var schema_1 = require("../schema");
var fulfillmentRecipient_1 = require("./fulfillmentRecipient");
exports.fulfillmentDeliveryDetailsSchema = (0, schema_1.object)({
    recipient: ['recipient', (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentRecipient_1.fulfillmentRecipientSchema; }))],
    scheduleType: ['schedule_type', (0, schema_1.optional)((0, schema_1.string)())],
    placedAt: ['placed_at', (0, schema_1.optional)((0, schema_1.string)())],
    deliverAt: ['deliver_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    prepTimeDuration: ['prep_time_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    deliveryWindowDuration: [
        'delivery_window_duration',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    completedAt: ['completed_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    inProgressAt: ['in_progress_at', (0, schema_1.optional)((0, schema_1.string)())],
    rejectedAt: ['rejected_at', (0, schema_1.optional)((0, schema_1.string)())],
    readyAt: ['ready_at', (0, schema_1.optional)((0, schema_1.string)())],
    deliveredAt: ['delivered_at', (0, schema_1.optional)((0, schema_1.string)())],
    canceledAt: ['canceled_at', (0, schema_1.optional)((0, schema_1.string)())],
    cancelReason: ['cancel_reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    courierPickupAt: ['courier_pickup_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    courierPickupWindowDuration: [
        'courier_pickup_window_duration',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    isNoContactDelivery: [
        'is_no_contact_delivery',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    dropoffNotes: ['dropoff_notes', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    courierProviderName: [
        'courier_provider_name',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    courierSupportPhoneNumber: [
        'courier_support_phone_number',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    squareDeliveryId: ['square_delivery_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    externalDeliveryId: ['external_delivery_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    managedDelivery: ['managed_delivery', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=fulfillmentDeliveryDetails.js.map
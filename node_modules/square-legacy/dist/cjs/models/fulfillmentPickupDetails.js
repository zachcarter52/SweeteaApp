"use strict";
exports.__esModule = true;
exports.fulfillmentPickupDetailsSchema = void 0;
var schema_1 = require("../schema");
var fulfillmentPickupDetailsCurbsidePickupDetails_1 = require("./fulfillmentPickupDetailsCurbsidePickupDetails");
var fulfillmentRecipient_1 = require("./fulfillmentRecipient");
exports.fulfillmentPickupDetailsSchema = (0, schema_1.object)({
    recipient: ['recipient', (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentRecipient_1.fulfillmentRecipientSchema; }))],
    expiresAt: ['expires_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    autoCompleteDuration: [
        'auto_complete_duration',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    scheduleType: ['schedule_type', (0, schema_1.optional)((0, schema_1.string)())],
    pickupAt: ['pickup_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    pickupWindowDuration: [
        'pickup_window_duration',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    prepTimeDuration: ['prep_time_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    placedAt: ['placed_at', (0, schema_1.optional)((0, schema_1.string)())],
    acceptedAt: ['accepted_at', (0, schema_1.optional)((0, schema_1.string)())],
    rejectedAt: ['rejected_at', (0, schema_1.optional)((0, schema_1.string)())],
    readyAt: ['ready_at', (0, schema_1.optional)((0, schema_1.string)())],
    expiredAt: ['expired_at', (0, schema_1.optional)((0, schema_1.string)())],
    pickedUpAt: ['picked_up_at', (0, schema_1.optional)((0, schema_1.string)())],
    canceledAt: ['canceled_at', (0, schema_1.optional)((0, schema_1.string)())],
    cancelReason: ['cancel_reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    isCurbsidePickup: ['is_curbside_pickup', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    curbsidePickupDetails: [
        'curbside_pickup_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentPickupDetailsCurbsidePickupDetails_1.fulfillmentPickupDetailsCurbsidePickupDetailsSchema; })),
    ]
});
//# sourceMappingURL=fulfillmentPickupDetails.js.map
"use strict";
exports.__esModule = true;
exports.fulfillmentShipmentDetailsSchema = void 0;
var schema_1 = require("../schema");
var fulfillmentRecipient_1 = require("./fulfillmentRecipient");
exports.fulfillmentShipmentDetailsSchema = (0, schema_1.object)({
    recipient: ['recipient', (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentRecipient_1.fulfillmentRecipientSchema; }))],
    carrier: ['carrier', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    shippingNote: ['shipping_note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    shippingType: ['shipping_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    trackingNumber: ['tracking_number', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    trackingUrl: ['tracking_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    placedAt: ['placed_at', (0, schema_1.optional)((0, schema_1.string)())],
    inProgressAt: ['in_progress_at', (0, schema_1.optional)((0, schema_1.string)())],
    packagedAt: ['packaged_at', (0, schema_1.optional)((0, schema_1.string)())],
    expectedShippedAt: ['expected_shipped_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    shippedAt: ['shipped_at', (0, schema_1.optional)((0, schema_1.string)())],
    canceledAt: ['canceled_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cancelReason: ['cancel_reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    failedAt: ['failed_at', (0, schema_1.optional)((0, schema_1.string)())],
    failureReason: ['failure_reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=fulfillmentShipmentDetails.js.map
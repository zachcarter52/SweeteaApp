"use strict";
exports.__esModule = true;
exports.fulfillmentSchema = void 0;
var schema_1 = require("../schema");
var fulfillmentDeliveryDetails_1 = require("./fulfillmentDeliveryDetails");
var fulfillmentFulfillmentEntry_1 = require("./fulfillmentFulfillmentEntry");
var fulfillmentPickupDetails_1 = require("./fulfillmentPickupDetails");
var fulfillmentShipmentDetails_1 = require("./fulfillmentShipmentDetails");
exports.fulfillmentSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    lineItemApplication: ['line_item_application', (0, schema_1.optional)((0, schema_1.string)())],
    entries: [
        'entries',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return fulfillmentFulfillmentEntry_1.fulfillmentFulfillmentEntrySchema; }))),
    ],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))],
    pickupDetails: [
        'pickup_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentPickupDetails_1.fulfillmentPickupDetailsSchema; })),
    ],
    shipmentDetails: [
        'shipment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentShipmentDetails_1.fulfillmentShipmentDetailsSchema; })),
    ],
    deliveryDetails: [
        'delivery_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return fulfillmentDeliveryDetails_1.fulfillmentDeliveryDetailsSchema; })),
    ]
});
//# sourceMappingURL=fulfillment.js.map
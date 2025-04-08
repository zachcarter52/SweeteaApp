"use strict";
exports.__esModule = true;
exports.orderFulfillmentSchema = void 0;
var schema_1 = require("../schema");
var orderFulfillmentDeliveryDetails_1 = require("./orderFulfillmentDeliveryDetails");
var orderFulfillmentFulfillmentEntry_1 = require("./orderFulfillmentFulfillmentEntry");
var orderFulfillmentPickupDetails_1 = require("./orderFulfillmentPickupDetails");
var orderFulfillmentShipmentDetails_1 = require("./orderFulfillmentShipmentDetails");
exports.orderFulfillmentSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    lineItemApplication: ['line_item_application', (0, schema_1.optional)((0, schema_1.string)())],
    entries: [
        'entries',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderFulfillmentFulfillmentEntry_1.orderFulfillmentFulfillmentEntrySchema; }))),
    ],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))],
    pickupDetails: [
        'pickup_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderFulfillmentPickupDetails_1.orderFulfillmentPickupDetailsSchema; })),
    ],
    shipmentDetails: [
        'shipment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderFulfillmentShipmentDetails_1.orderFulfillmentShipmentDetailsSchema; })),
    ],
    deliveryDetails: [
        'delivery_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return orderFulfillmentDeliveryDetails_1.orderFulfillmentDeliveryDetailsSchema; })),
    ]
});
//# sourceMappingURL=orderFulfillment.js.map
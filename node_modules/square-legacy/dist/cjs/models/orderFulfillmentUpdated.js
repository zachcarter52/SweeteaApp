"use strict";
exports.__esModule = true;
exports.orderFulfillmentUpdatedSchema = void 0;
var schema_1 = require("../schema");
var orderFulfillmentUpdatedUpdate_1 = require("./orderFulfillmentUpdatedUpdate");
exports.orderFulfillmentUpdatedSchema = (0, schema_1.object)({
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    fulfillmentUpdate: [
        'fulfillment_update',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderFulfillmentUpdatedUpdate_1.orderFulfillmentUpdatedUpdateSchema; })))),
    ]
});
//# sourceMappingURL=orderFulfillmentUpdated.js.map
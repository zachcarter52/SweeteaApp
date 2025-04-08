"use strict";
exports.__esModule = true;
exports.updateOrderRequestSchema = void 0;
var schema_1 = require("../schema");
var order_1 = require("./order");
exports.updateOrderRequestSchema = (0, schema_1.object)({
    order: ['order', (0, schema_1.optional)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))],
    fieldsToClear: ['fields_to_clear', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=updateOrderRequest.js.map
"use strict";
exports.__esModule = true;
exports.createOrderRequestSchema = void 0;
var schema_1 = require("../schema");
var order_1 = require("./order");
exports.createOrderRequestSchema = (0, schema_1.object)({
    order: ['order', (0, schema_1.optional)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createOrderRequest.js.map
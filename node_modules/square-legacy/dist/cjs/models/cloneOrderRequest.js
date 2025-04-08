"use strict";
exports.__esModule = true;
exports.cloneOrderRequestSchema = void 0;
var schema_1 = require("../schema");
exports.cloneOrderRequestSchema = (0, schema_1.object)({
    orderId: ['order_id', (0, schema_1.string)()],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=cloneOrderRequest.js.map
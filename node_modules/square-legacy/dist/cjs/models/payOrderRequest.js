"use strict";
exports.__esModule = true;
exports.payOrderRequestSchema = void 0;
var schema_1 = require("../schema");
exports.payOrderRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    orderVersion: ['order_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    paymentIds: ['payment_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=payOrderRequest.js.map
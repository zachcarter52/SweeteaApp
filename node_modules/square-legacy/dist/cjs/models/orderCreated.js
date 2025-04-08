"use strict";
exports.__esModule = true;
exports.orderCreatedSchema = void 0;
var schema_1 = require("../schema");
exports.orderCreatedSchema = (0, schema_1.object)({
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=orderCreated.js.map
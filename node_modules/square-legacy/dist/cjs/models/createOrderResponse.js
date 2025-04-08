"use strict";
exports.__esModule = true;
exports.createOrderResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var order_1 = require("./order");
exports.createOrderResponseSchema = (0, schema_1.object)({
    order: ['order', (0, schema_1.optional)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=createOrderResponse.js.map
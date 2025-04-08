"use strict";
exports.__esModule = true;
exports.payOrderResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var order_1 = require("./order");
exports.payOrderResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    order: ['order', (0, schema_1.optional)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))]
});
//# sourceMappingURL=payOrderResponse.js.map
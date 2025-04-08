"use strict";
exports.__esModule = true;
exports.searchOrdersResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var order_1 = require("./order");
var orderEntry_1 = require("./orderEntry");
exports.searchOrdersResponseSchema = (0, schema_1.object)({
    orderEntries: [
        'order_entries',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return orderEntry_1.orderEntrySchema; }))),
    ],
    orders: ['orders', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return order_1.orderSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=searchOrdersResponse.js.map
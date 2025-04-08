"use strict";
exports.__esModule = true;
exports.searchCustomersResponseSchema = void 0;
var schema_1 = require("../schema");
var customer_1 = require("./customer");
var error_1 = require("./error");
exports.searchCustomersResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    customers: ['customers', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return customer_1.customerSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    count: ['count', (0, schema_1.optional)((0, schema_1.bigint)())]
});
//# sourceMappingURL=searchCustomersResponse.js.map
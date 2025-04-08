"use strict";
exports.__esModule = true;
exports.searchCustomersRequestSchema = void 0;
var schema_1 = require("../schema");
var customerQuery_1 = require("./customerQuery");
exports.searchCustomersRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.bigint)())],
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerQuery_1.customerQuerySchema; }))],
    count: ['count', (0, schema_1.optional)((0, schema_1.boolean)())]
});
//# sourceMappingURL=searchCustomersRequest.js.map
"use strict";
exports.__esModule = true;
exports.createCustomerResponseSchema = void 0;
var schema_1 = require("../schema");
var customer_1 = require("./customer");
var error_1 = require("./error");
exports.createCustomerResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    customer: ['customer', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customer_1.customerSchema; }))]
});
//# sourceMappingURL=createCustomerResponse.js.map
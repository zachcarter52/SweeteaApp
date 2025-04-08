"use strict";
exports.__esModule = true;
exports.bulkCreateCustomersResponseSchema = void 0;
var schema_1 = require("../schema");
var createCustomerResponse_1 = require("./createCustomerResponse");
var error_1 = require("./error");
exports.bulkCreateCustomersResponseSchema = (0, schema_1.object)({
    responses: [
        'responses',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return createCustomerResponse_1.createCustomerResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkCreateCustomersResponse.js.map
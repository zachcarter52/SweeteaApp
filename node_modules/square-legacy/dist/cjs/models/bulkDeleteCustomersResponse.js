"use strict";
exports.__esModule = true;
exports.bulkDeleteCustomersResponseSchema = void 0;
var schema_1 = require("../schema");
var deleteCustomerResponse_1 = require("./deleteCustomerResponse");
var error_1 = require("./error");
exports.bulkDeleteCustomersResponseSchema = (0, schema_1.object)({
    responses: [
        'responses',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return deleteCustomerResponse_1.deleteCustomerResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkDeleteCustomersResponse.js.map
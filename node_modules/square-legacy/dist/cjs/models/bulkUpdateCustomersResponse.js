"use strict";
exports.__esModule = true;
exports.bulkUpdateCustomersResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var updateCustomerResponse_1 = require("./updateCustomerResponse");
exports.bulkUpdateCustomersResponseSchema = (0, schema_1.object)({
    responses: [
        'responses',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return updateCustomerResponse_1.updateCustomerResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkUpdateCustomersResponse.js.map
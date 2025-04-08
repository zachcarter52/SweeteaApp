"use strict";
exports.__esModule = true;
exports.bulkRetrieveCustomersResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var retrieveCustomerResponse_1 = require("./retrieveCustomerResponse");
exports.bulkRetrieveCustomersResponseSchema = (0, schema_1.object)({
    responses: [
        'responses',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return retrieveCustomerResponse_1.retrieveCustomerResponseSchema; }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkRetrieveCustomersResponse.js.map
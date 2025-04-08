"use strict";
exports.__esModule = true;
exports.bulkCreateVendorsResponseSchema = void 0;
var schema_1 = require("../schema");
var createVendorResponse_1 = require("./createVendorResponse");
var error_1 = require("./error");
exports.bulkCreateVendorsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    responses: [
        'responses',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return createVendorResponse_1.createVendorResponseSchema; }))),
    ]
});
//# sourceMappingURL=bulkCreateVendorsResponse.js.map
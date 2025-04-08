"use strict";
exports.__esModule = true;
exports.bulkUpdateVendorsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var updateVendorResponse_1 = require("./updateVendorResponse");
exports.bulkUpdateVendorsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    responses: [
        'responses',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () { return updateVendorResponse_1.updateVendorResponseSchema; }))),
    ]
});
//# sourceMappingURL=bulkUpdateVendorsResponse.js.map
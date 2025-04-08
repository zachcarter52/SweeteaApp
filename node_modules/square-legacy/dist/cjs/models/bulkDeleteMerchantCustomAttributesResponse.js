"use strict";
exports.__esModule = true;
exports.bulkDeleteMerchantCustomAttributesResponseSchema = void 0;
var schema_1 = require("../schema");
var bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse_1 = require("./bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse");
var error_1 = require("./error");
exports.bulkDeleteMerchantCustomAttributesResponseSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse_1.bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema;
        })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkDeleteMerchantCustomAttributesResponse.js.map
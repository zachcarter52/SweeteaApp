"use strict";
exports.__esModule = true;
exports.bulkUpsertMerchantCustomAttributesResponseSchema = void 0;
var schema_1 = require("../schema");
var bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse_1 = require("./bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse");
var error_1 = require("./error");
exports.bulkUpsertMerchantCustomAttributesResponseSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.optional)((0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse_1.bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema;
        }))),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkUpsertMerchantCustomAttributesResponse.js.map
"use strict";
exports.__esModule = true;
exports.bulkUpsertCustomerCustomAttributesRequestSchema = void 0;
var schema_1 = require("../schema");
var bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest_1 = require("./bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest");
exports.bulkUpsertCustomerCustomAttributesRequestSchema = (0, schema_1.object)({
    values: [
        'values',
        (0, schema_1.dict)((0, schema_1.lazy)(function () {
            return bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequest_1.bulkUpsertCustomerCustomAttributesRequestCustomerCustomAttributeUpsertRequestSchema;
        })),
    ]
});
//# sourceMappingURL=bulkUpsertCustomerCustomAttributesRequest.js.map
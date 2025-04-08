"use strict";
exports.__esModule = true;
exports.bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema = void 0;
var schema_1 = require("../schema");
var customAttribute_1 = require("./customAttribute");
var error_1 = require("./error");
exports.bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema = (0, schema_1.object)({
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.string)())],
    customAttribute: [
        'custom_attribute',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return customAttribute_1.customAttributeSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse.js.map
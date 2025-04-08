"use strict";
exports.__esModule = true;
exports.listBookingCustomAttributesResponseSchema = void 0;
var schema_1 = require("../schema");
var customAttribute_1 = require("./customAttribute");
var error_1 = require("./error");
exports.listBookingCustomAttributesResponseSchema = (0, schema_1.object)({
    customAttributes: [
        'custom_attributes',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return customAttribute_1.customAttributeSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=listBookingCustomAttributesResponse.js.map
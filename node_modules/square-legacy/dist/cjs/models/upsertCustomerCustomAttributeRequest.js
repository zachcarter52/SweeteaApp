"use strict";
exports.__esModule = true;
exports.upsertCustomerCustomAttributeRequestSchema = void 0;
var schema_1 = require("../schema");
var customAttribute_1 = require("./customAttribute");
exports.upsertCustomerCustomAttributeRequestSchema = (0, schema_1.object)({
    customAttribute: ['custom_attribute', (0, schema_1.lazy)(function () { return customAttribute_1.customAttributeSchema; })],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=upsertCustomerCustomAttributeRequest.js.map
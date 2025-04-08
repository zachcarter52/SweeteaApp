"use strict";
exports.__esModule = true;
exports.listCustomerCustomAttributeDefinitionsResponseSchema = void 0;
var schema_1 = require("../schema");
var customAttributeDefinition_1 = require("./customAttributeDefinition");
var error_1 = require("./error");
exports.listCustomerCustomAttributeDefinitionsResponseSchema = (0, schema_1.object)({
    customAttributeDefinitions: [
        'custom_attribute_definitions',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return customAttributeDefinition_1.customAttributeDefinitionSchema; }))),
    ],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=listCustomerCustomAttributeDefinitionsResponse.js.map
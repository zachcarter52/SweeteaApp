"use strict";
exports.__esModule = true;
exports.createOrderCustomAttributeDefinitionResponseSchema = void 0;
var schema_1 = require("../schema");
var customAttributeDefinition_1 = require("./customAttributeDefinition");
var error_1 = require("./error");
exports.createOrderCustomAttributeDefinitionResponseSchema = (0, schema_1.object)({
    customAttributeDefinition: [
        'custom_attribute_definition',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return customAttributeDefinition_1.customAttributeDefinitionSchema; })),
    ],
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))]
});
//# sourceMappingURL=createOrderCustomAttributeDefinitionResponse.js.map
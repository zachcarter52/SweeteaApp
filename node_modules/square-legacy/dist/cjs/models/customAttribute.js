"use strict";
exports.__esModule = true;
exports.customAttributeSchema = void 0;
var schema_1 = require("../schema");
var customAttributeDefinition_1 = require("./customAttributeDefinition");
exports.customAttributeSchema = (0, schema_1.object)({
    key: ['key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    value: ['value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.unknown)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    visibility: ['visibility', (0, schema_1.optional)((0, schema_1.string)())],
    definition: [
        'definition',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return customAttributeDefinition_1.customAttributeDefinitionSchema; })),
    ],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=customAttribute.js.map
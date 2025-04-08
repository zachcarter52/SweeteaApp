"use strict";
exports.__esModule = true;
exports.customAttributeDefinitionSchema = void 0;
var schema_1 = require("../schema");
exports.customAttributeDefinitionSchema = (0, schema_1.object)({
    key: ['key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    schema: ['schema', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.unknown)())))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    visibility: ['visibility', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=customAttributeDefinition.js.map
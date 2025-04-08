"use strict";
exports.__esModule = true;
exports.catalogCustomAttributeDefinitionSchema = void 0;
var schema_1 = require("../schema");
var catalogCustomAttributeDefinitionNumberConfig_1 = require("./catalogCustomAttributeDefinitionNumberConfig");
var catalogCustomAttributeDefinitionSelectionConfig_1 = require("./catalogCustomAttributeDefinitionSelectionConfig");
var catalogCustomAttributeDefinitionStringConfig_1 = require("./catalogCustomAttributeDefinitionStringConfig");
var sourceApplication_1 = require("./sourceApplication");
exports.catalogCustomAttributeDefinitionSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    name: ['name', (0, schema_1.string)()],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sourceApplication: [
        'source_application',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return sourceApplication_1.sourceApplicationSchema; })),
    ],
    allowedObjectTypes: ['allowed_object_types', (0, schema_1.array)((0, schema_1.string)())],
    sellerVisibility: ['seller_visibility', (0, schema_1.optional)((0, schema_1.string)())],
    appVisibility: ['app_visibility', (0, schema_1.optional)((0, schema_1.string)())],
    stringConfig: [
        'string_config',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogCustomAttributeDefinitionStringConfig_1.catalogCustomAttributeDefinitionStringConfigSchema; })),
    ],
    numberConfig: [
        'number_config',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogCustomAttributeDefinitionNumberConfig_1.catalogCustomAttributeDefinitionNumberConfigSchema; })),
    ],
    selectionConfig: [
        'selection_config',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogCustomAttributeDefinitionSelectionConfig_1.catalogCustomAttributeDefinitionSelectionConfigSchema; })),
    ],
    customAttributeUsageCount: [
        'custom_attribute_usage_count',
        (0, schema_1.optional)((0, schema_1.number)()),
    ],
    key: ['key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=catalogCustomAttributeDefinition.js.map
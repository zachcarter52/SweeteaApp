"use strict";
exports.__esModule = true;
exports.catalogCustomAttributeValueSchema = void 0;
var schema_1 = require("../schema");
exports.catalogCustomAttributeValueSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    stringValue: ['string_value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customAttributeDefinitionId: [
        'custom_attribute_definition_id',
        (0, schema_1.optional)((0, schema_1.string)()),
    ],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    numberValue: ['number_value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    booleanValue: ['boolean_value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    selectionUidValues: [
        'selection_uid_values',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    key: ['key', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=catalogCustomAttributeValue.js.map
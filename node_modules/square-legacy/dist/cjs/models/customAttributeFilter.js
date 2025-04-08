"use strict";
exports.__esModule = true;
exports.customAttributeFilterSchema = void 0;
var schema_1 = require("../schema");
var range_1 = require("./range");
exports.customAttributeFilterSchema = (0, schema_1.object)({
    customAttributeDefinitionId: [
        'custom_attribute_definition_id',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    key: ['key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    stringFilter: ['string_filter', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    numberFilter: ['number_filter', (0, schema_1.optional)((0, schema_1.lazy)(function () { return range_1.rangeSchema; }))],
    selectionUidsFilter: [
        'selection_uids_filter',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    boolFilter: ['bool_filter', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=customAttributeFilter.js.map
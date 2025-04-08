"use strict";
exports.__esModule = true;
exports.catalogItemOptionValueSchema = void 0;
var schema_1 = require("../schema");
exports.catalogItemOptionValueSchema = (0, schema_1.object)({
    itemOptionId: ['item_option_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    color: ['color', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=catalogItemOptionValue.js.map
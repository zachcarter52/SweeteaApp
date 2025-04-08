"use strict";
exports.__esModule = true;
exports.catalogItemOptionSchema = void 0;
var schema_1 = require("../schema");
var catalogObject_1 = require("./catalogObject");
exports.catalogItemOptionSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    displayName: ['display_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    showColors: ['show_colors', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    values: [
        'values',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; })))),
    ]
});
//# sourceMappingURL=catalogItemOption.js.map
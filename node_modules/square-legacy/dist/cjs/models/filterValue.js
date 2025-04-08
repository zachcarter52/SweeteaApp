"use strict";
exports.__esModule = true;
exports.filterValueSchema = void 0;
var schema_1 = require("../schema");
exports.filterValueSchema = (0, schema_1.object)({
    all: ['all', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    any: ['any', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    none: ['none', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=filterValue.js.map
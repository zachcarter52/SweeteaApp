"use strict";
exports.__esModule = true;
exports.catalogObjectCategorySchema = void 0;
var schema_1 = require("../schema");
exports.catalogObjectCategorySchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))]
});
//# sourceMappingURL=catalogObjectCategory.js.map
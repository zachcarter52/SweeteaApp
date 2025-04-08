"use strict";
exports.__esModule = true;
exports.categoryPathToRootNodeSchema = void 0;
var schema_1 = require("../schema");
exports.categoryPathToRootNodeSchema = (0, schema_1.object)({
    categoryId: ['category_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    categoryName: ['category_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=categoryPathToRootNode.js.map
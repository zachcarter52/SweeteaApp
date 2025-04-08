"use strict";
exports.__esModule = true;
exports.listLocationCustomAttributeDefinitionsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listLocationCustomAttributeDefinitionsRequestSchema = (0, schema_1.object)({
    visibilityFilter: ['visibility_filter', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listLocationCustomAttributeDefinitionsRequest.js.map
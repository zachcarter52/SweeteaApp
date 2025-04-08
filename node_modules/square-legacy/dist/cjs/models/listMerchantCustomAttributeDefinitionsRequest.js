"use strict";
exports.__esModule = true;
exports.listMerchantCustomAttributeDefinitionsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listMerchantCustomAttributeDefinitionsRequestSchema = (0, schema_1.object)({
    visibilityFilter: ['visibility_filter', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=listMerchantCustomAttributeDefinitionsRequest.js.map
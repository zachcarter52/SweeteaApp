"use strict";
exports.__esModule = true;
exports.listCatalogRequestSchema = void 0;
var schema_1 = require("../schema");
exports.listCatalogRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    types: ['types', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))]
});
//# sourceMappingURL=listCatalogRequest.js.map
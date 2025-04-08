"use strict";
exports.__esModule = true;
exports.batchDeleteCatalogObjectsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.batchDeleteCatalogObjectsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    deletedObjectIds: ['deleted_object_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    deletedAt: ['deleted_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=batchDeleteCatalogObjectsResponse.js.map
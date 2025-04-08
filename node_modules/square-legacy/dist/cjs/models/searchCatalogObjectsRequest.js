"use strict";
exports.__esModule = true;
exports.searchCatalogObjectsRequestSchema = void 0;
var schema_1 = require("../schema");
var catalogQuery_1 = require("./catalogQuery");
exports.searchCatalogObjectsRequestSchema = (0, schema_1.object)({
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    objectTypes: ['object_types', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    includeDeletedObjects: ['include_deleted_objects', (0, schema_1.optional)((0, schema_1.boolean)())],
    includeRelatedObjects: ['include_related_objects', (0, schema_1.optional)((0, schema_1.boolean)())],
    beginTime: ['begin_time', (0, schema_1.optional)((0, schema_1.string)())],
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQuery_1.catalogQuerySchema; }))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    includeCategoryPathToRoot: [
        'include_category_path_to_root',
        (0, schema_1.optional)((0, schema_1.boolean)()),
    ]
});
//# sourceMappingURL=searchCatalogObjectsRequest.js.map
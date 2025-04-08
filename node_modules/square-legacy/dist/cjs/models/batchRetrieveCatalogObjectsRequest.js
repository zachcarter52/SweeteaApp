"use strict";
exports.__esModule = true;
exports.batchRetrieveCatalogObjectsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.batchRetrieveCatalogObjectsRequestSchema = (0, schema_1.object)({
    objectIds: ['object_ids', (0, schema_1.array)((0, schema_1.string)())],
    includeRelatedObjects: [
        'include_related_objects',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    includeDeletedObjects: [
        'include_deleted_objects',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    includeCategoryPathToRoot: [
        'include_category_path_to_root',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=batchRetrieveCatalogObjectsRequest.js.map
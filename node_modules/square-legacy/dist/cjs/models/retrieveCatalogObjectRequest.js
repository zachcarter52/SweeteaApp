"use strict";
exports.__esModule = true;
exports.retrieveCatalogObjectRequestSchema = void 0;
var schema_1 = require("../schema");
exports.retrieveCatalogObjectRequestSchema = (0, schema_1.object)({
    includeRelatedObjects: [
        'include_related_objects',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    includeCategoryPathToRoot: [
        'include_category_path_to_root',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ]
});
//# sourceMappingURL=retrieveCatalogObjectRequest.js.map
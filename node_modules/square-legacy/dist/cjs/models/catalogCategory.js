"use strict";
exports.__esModule = true;
exports.catalogCategorySchema = void 0;
var schema_1 = require("../schema");
var catalogEcomSeoData_1 = require("./catalogEcomSeoData");
var catalogObjectCategory_1 = require("./catalogObjectCategory");
var categoryPathToRootNode_1 = require("./categoryPathToRootNode");
exports.catalogCategorySchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    imageIds: ['image_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    categoryType: ['category_type', (0, schema_1.optional)((0, schema_1.string)())],
    parentCategory: [
        'parent_category',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogObjectCategory_1.catalogObjectCategorySchema; })),
    ],
    isTopLevel: ['is_top_level', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    channels: ['channels', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    availabilityPeriodIds: [
        'availability_period_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    onlineVisibility: ['online_visibility', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    rootCategory: ['root_category', (0, schema_1.optional)((0, schema_1.string)())],
    ecomSeoData: [
        'ecom_seo_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogEcomSeoData_1.catalogEcomSeoDataSchema; })),
    ],
    pathToRoot: [
        'path_to_root',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return categoryPathToRootNode_1.categoryPathToRootNodeSchema; })))),
    ]
});
//# sourceMappingURL=catalogCategory.js.map
"use strict";
exports.__esModule = true;
exports.searchCatalogItemsRequestSchema = void 0;
var schema_1 = require("../schema");
var customAttributeFilter_1 = require("./customAttributeFilter");
exports.searchCatalogItemsRequestSchema = (0, schema_1.object)({
    textFilter: ['text_filter', (0, schema_1.optional)((0, schema_1.string)())],
    categoryIds: ['category_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    stockLevels: ['stock_levels', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    enabledLocationIds: ['enabled_location_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())],
    productTypes: ['product_types', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    customAttributeFilters: [
        'custom_attribute_filters',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return customAttributeFilter_1.customAttributeFilterSchema; }))),
    ],
    archivedState: ['archived_state', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchCatalogItemsRequest.js.map
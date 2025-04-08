"use strict";
exports.__esModule = true;
exports.catalogQuerySchema = void 0;
var schema_1 = require("../schema");
var catalogQueryExact_1 = require("./catalogQueryExact");
var catalogQueryItemsForItemOptions_1 = require("./catalogQueryItemsForItemOptions");
var catalogQueryItemsForModifierList_1 = require("./catalogQueryItemsForModifierList");
var catalogQueryItemsForTax_1 = require("./catalogQueryItemsForTax");
var catalogQueryItemVariationsForItemOptionValues_1 = require("./catalogQueryItemVariationsForItemOptionValues");
var catalogQueryPrefix_1 = require("./catalogQueryPrefix");
var catalogQueryRange_1 = require("./catalogQueryRange");
var catalogQuerySet_1 = require("./catalogQuerySet");
var catalogQuerySortedAttribute_1 = require("./catalogQuerySortedAttribute");
var catalogQueryText_1 = require("./catalogQueryText");
exports.catalogQuerySchema = (0, schema_1.object)({
    sortedAttributeQuery: [
        'sorted_attribute_query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQuerySortedAttribute_1.catalogQuerySortedAttributeSchema; })),
    ],
    exactQuery: ['exact_query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryExact_1.catalogQueryExactSchema; }))],
    setQuery: ['set_query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQuerySet_1.catalogQuerySetSchema; }))],
    prefixQuery: ['prefix_query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryPrefix_1.catalogQueryPrefixSchema; }))],
    rangeQuery: ['range_query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryRange_1.catalogQueryRangeSchema; }))],
    textQuery: ['text_query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryText_1.catalogQueryTextSchema; }))],
    itemsForTaxQuery: [
        'items_for_tax_query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryItemsForTax_1.catalogQueryItemsForTaxSchema; })),
    ],
    itemsForModifierListQuery: [
        'items_for_modifier_list_query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryItemsForModifierList_1.catalogQueryItemsForModifierListSchema; })),
    ],
    itemsForItemOptionsQuery: [
        'items_for_item_options_query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryItemsForItemOptions_1.catalogQueryItemsForItemOptionsSchema; })),
    ],
    itemVariationsForItemOptionValuesQuery: [
        'item_variations_for_item_option_values_query',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQueryItemVariationsForItemOptionValues_1.catalogQueryItemVariationsForItemOptionValuesSchema; })),
    ]
});
//# sourceMappingURL=catalogQuery.js.map
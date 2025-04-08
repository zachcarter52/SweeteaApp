"use strict";
exports.__esModule = true;
exports.catalogItemSchema = void 0;
var schema_1 = require("../schema");
var catalogEcomSeoData_1 = require("./catalogEcomSeoData");
var catalogItemFoodAndBeverageDetails_1 = require("./catalogItemFoodAndBeverageDetails");
var catalogItemModifierListInfo_1 = require("./catalogItemModifierListInfo");
var catalogItemOptionForItem_1 = require("./catalogItemOptionForItem");
var catalogObject_1 = require("./catalogObject");
var catalogObjectCategory_1 = require("./catalogObjectCategory");
exports.catalogItemSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    abbreviation: ['abbreviation', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    labelColor: ['label_color', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    isTaxable: ['is_taxable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    availableOnline: ['available_online', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    availableForPickup: ['available_for_pickup', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    availableElectronically: [
        'available_electronically',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    categoryId: ['category_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    taxIds: ['tax_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    modifierListInfo: [
        'modifier_list_info',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogItemModifierListInfo_1.catalogItemModifierListInfoSchema; })))),
    ],
    variations: [
        'variations',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogObject_1.catalogObjectSchema; })))),
    ],
    productType: ['product_type', (0, schema_1.optional)((0, schema_1.string)())],
    skipModifierScreen: ['skip_modifier_screen', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    itemOptions: [
        'item_options',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogItemOptionForItem_1.catalogItemOptionForItemSchema; })))),
    ],
    imageIds: ['image_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    sortName: ['sort_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    categories: [
        'categories',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogObjectCategory_1.catalogObjectCategorySchema; })))),
    ],
    descriptionHtml: ['description_html', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    descriptionPlaintext: ['description_plaintext', (0, schema_1.optional)((0, schema_1.string)())],
    channels: ['channels', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    isArchived: ['is_archived', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    ecomSeoData: [
        'ecom_seo_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogEcomSeoData_1.catalogEcomSeoDataSchema; })),
    ],
    foodAndBeverageDetails: [
        'food_and_beverage_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogItemFoodAndBeverageDetails_1.catalogItemFoodAndBeverageDetailsSchema; })),
    ],
    reportingCategory: [
        'reporting_category',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogObjectCategory_1.catalogObjectCategorySchema; })),
    ]
});
//# sourceMappingURL=catalogItem.js.map
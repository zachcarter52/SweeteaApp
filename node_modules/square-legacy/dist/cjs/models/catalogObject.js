"use strict";
exports.__esModule = true;
exports.catalogObjectSchema = void 0;
var schema_1 = require("../schema");
var catalogAvailabilityPeriod_1 = require("./catalogAvailabilityPeriod");
var catalogCategory_1 = require("./catalogCategory");
var catalogCustomAttributeDefinition_1 = require("./catalogCustomAttributeDefinition");
var catalogCustomAttributeValue_1 = require("./catalogCustomAttributeValue");
var catalogDiscount_1 = require("./catalogDiscount");
var catalogImage_1 = require("./catalogImage");
var catalogItem_1 = require("./catalogItem");
var catalogItemOption_1 = require("./catalogItemOption");
var catalogItemOptionValue_1 = require("./catalogItemOptionValue");
var catalogItemVariation_1 = require("./catalogItemVariation");
var catalogMeasurementUnit_1 = require("./catalogMeasurementUnit");
var catalogModifier_1 = require("./catalogModifier");
var catalogModifierList_1 = require("./catalogModifierList");
var catalogPricingRule_1 = require("./catalogPricingRule");
var catalogProductSet_1 = require("./catalogProductSet");
var catalogQuickAmountsSettings_1 = require("./catalogQuickAmountsSettings");
var catalogSubscriptionPlan_1 = require("./catalogSubscriptionPlan");
var catalogSubscriptionPlanVariation_1 = require("./catalogSubscriptionPlanVariation");
var catalogTax_1 = require("./catalogTax");
var catalogTimePeriod_1 = require("./catalogTimePeriod");
var catalogV1Id_1 = require("./catalogV1Id");
exports.catalogObjectSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    id: ['id', (0, schema_1.string)()],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.bigint)())],
    isDeleted: ['is_deleted', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    customAttributeValues: [
        'custom_attribute_values',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.lazy)(function () { return catalogCustomAttributeValue_1.catalogCustomAttributeValueSchema; })))),
    ],
    catalogV1Ids: [
        'catalog_v1_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogV1Id_1.catalogV1IdSchema; })))),
    ],
    presentAtAllLocations: [
        'present_at_all_locations',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    presentAtLocationIds: [
        'present_at_location_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    absentAtLocationIds: [
        'absent_at_location_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    itemData: ['item_data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogItem_1.catalogItemSchema; }))],
    categoryData: ['category_data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogCategory_1.catalogCategorySchema; }))],
    itemVariationData: [
        'item_variation_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogItemVariation_1.catalogItemVariationSchema; })),
    ],
    taxData: ['tax_data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogTax_1.catalogTaxSchema; }))],
    discountData: ['discount_data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogDiscount_1.catalogDiscountSchema; }))],
    modifierListData: [
        'modifier_list_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogModifierList_1.catalogModifierListSchema; })),
    ],
    modifierData: ['modifier_data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogModifier_1.catalogModifierSchema; }))],
    timePeriodData: [
        'time_period_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogTimePeriod_1.catalogTimePeriodSchema; })),
    ],
    productSetData: [
        'product_set_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogProductSet_1.catalogProductSetSchema; })),
    ],
    pricingRuleData: [
        'pricing_rule_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogPricingRule_1.catalogPricingRuleSchema; })),
    ],
    imageData: ['image_data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogImage_1.catalogImageSchema; }))],
    measurementUnitData: [
        'measurement_unit_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogMeasurementUnit_1.catalogMeasurementUnitSchema; })),
    ],
    subscriptionPlanData: [
        'subscription_plan_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogSubscriptionPlan_1.catalogSubscriptionPlanSchema; })),
    ],
    itemOptionData: [
        'item_option_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogItemOption_1.catalogItemOptionSchema; })),
    ],
    itemOptionValueData: [
        'item_option_value_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogItemOptionValue_1.catalogItemOptionValueSchema; })),
    ],
    customAttributeDefinitionData: [
        'custom_attribute_definition_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogCustomAttributeDefinition_1.catalogCustomAttributeDefinitionSchema; })),
    ],
    quickAmountsSettingsData: [
        'quick_amounts_settings_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogQuickAmountsSettings_1.catalogQuickAmountsSettingsSchema; })),
    ],
    subscriptionPlanVariationData: [
        'subscription_plan_variation_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogSubscriptionPlanVariation_1.catalogSubscriptionPlanVariationSchema; })),
    ],
    availabilityPeriodData: [
        'availability_period_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogAvailabilityPeriod_1.catalogAvailabilityPeriodSchema; })),
    ]
});
//# sourceMappingURL=catalogObject.js.map
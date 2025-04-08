import { array, bigint, boolean, dict, lazy, nullable, object, optional, string, } from '../schema';
import { catalogAvailabilityPeriodSchema, } from './catalogAvailabilityPeriod';
import { catalogCategorySchema } from './catalogCategory';
import { catalogCustomAttributeDefinitionSchema, } from './catalogCustomAttributeDefinition';
import { catalogCustomAttributeValueSchema, } from './catalogCustomAttributeValue';
import { catalogDiscountSchema } from './catalogDiscount';
import { catalogImageSchema } from './catalogImage';
import { catalogItemSchema } from './catalogItem';
import { catalogItemOptionSchema, } from './catalogItemOption';
import { catalogItemOptionValueSchema, } from './catalogItemOptionValue';
import { catalogItemVariationSchema, } from './catalogItemVariation';
import { catalogMeasurementUnitSchema, } from './catalogMeasurementUnit';
import { catalogModifierSchema } from './catalogModifier';
import { catalogModifierListSchema, } from './catalogModifierList';
import { catalogPricingRuleSchema, } from './catalogPricingRule';
import { catalogProductSetSchema, } from './catalogProductSet';
import { catalogQuickAmountsSettingsSchema, } from './catalogQuickAmountsSettings';
import { catalogSubscriptionPlanSchema, } from './catalogSubscriptionPlan';
import { catalogSubscriptionPlanVariationSchema, } from './catalogSubscriptionPlanVariation';
import { catalogTaxSchema } from './catalogTax';
import { catalogTimePeriodSchema, } from './catalogTimePeriod';
import { catalogV1IdSchema } from './catalogV1Id';
export const catalogObjectSchema = object({
    type: ['type', string()],
    id: ['id', string()],
    updatedAt: ['updated_at', optional(string())],
    version: ['version', optional(bigint())],
    isDeleted: ['is_deleted', optional(nullable(boolean()))],
    customAttributeValues: [
        'custom_attribute_values',
        optional(nullable(dict(lazy(() => catalogCustomAttributeValueSchema)))),
    ],
    catalogV1Ids: [
        'catalog_v1_ids',
        optional(nullable(array(lazy(() => catalogV1IdSchema)))),
    ],
    presentAtAllLocations: [
        'present_at_all_locations',
        optional(nullable(boolean())),
    ],
    presentAtLocationIds: [
        'present_at_location_ids',
        optional(nullable(array(string()))),
    ],
    absentAtLocationIds: [
        'absent_at_location_ids',
        optional(nullable(array(string()))),
    ],
    itemData: ['item_data', optional(lazy(() => catalogItemSchema))],
    categoryData: ['category_data', optional(lazy(() => catalogCategorySchema))],
    itemVariationData: [
        'item_variation_data',
        optional(lazy(() => catalogItemVariationSchema)),
    ],
    taxData: ['tax_data', optional(lazy(() => catalogTaxSchema))],
    discountData: ['discount_data', optional(lazy(() => catalogDiscountSchema))],
    modifierListData: [
        'modifier_list_data',
        optional(lazy(() => catalogModifierListSchema)),
    ],
    modifierData: ['modifier_data', optional(lazy(() => catalogModifierSchema))],
    timePeriodData: [
        'time_period_data',
        optional(lazy(() => catalogTimePeriodSchema)),
    ],
    productSetData: [
        'product_set_data',
        optional(lazy(() => catalogProductSetSchema)),
    ],
    pricingRuleData: [
        'pricing_rule_data',
        optional(lazy(() => catalogPricingRuleSchema)),
    ],
    imageData: ['image_data', optional(lazy(() => catalogImageSchema))],
    measurementUnitData: [
        'measurement_unit_data',
        optional(lazy(() => catalogMeasurementUnitSchema)),
    ],
    subscriptionPlanData: [
        'subscription_plan_data',
        optional(lazy(() => catalogSubscriptionPlanSchema)),
    ],
    itemOptionData: [
        'item_option_data',
        optional(lazy(() => catalogItemOptionSchema)),
    ],
    itemOptionValueData: [
        'item_option_value_data',
        optional(lazy(() => catalogItemOptionValueSchema)),
    ],
    customAttributeDefinitionData: [
        'custom_attribute_definition_data',
        optional(lazy(() => catalogCustomAttributeDefinitionSchema)),
    ],
    quickAmountsSettingsData: [
        'quick_amounts_settings_data',
        optional(lazy(() => catalogQuickAmountsSettingsSchema)),
    ],
    subscriptionPlanVariationData: [
        'subscription_plan_variation_data',
        optional(lazy(() => catalogSubscriptionPlanVariationSchema)),
    ],
    availabilityPeriodData: [
        'availability_period_data',
        optional(lazy(() => catalogAvailabilityPeriodSchema)),
    ],
});
//# sourceMappingURL=catalogObject.js.map
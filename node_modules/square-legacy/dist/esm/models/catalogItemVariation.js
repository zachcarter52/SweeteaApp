import { array, bigint, boolean, lazy, nullable, number, object, optional, string, } from '../schema';
import { catalogItemOptionValueForItemVariationSchema, } from './catalogItemOptionValueForItemVariation';
import { catalogStockConversionSchema, } from './catalogStockConversion';
import { itemVariationLocationOverridesSchema, } from './itemVariationLocationOverrides';
import { moneySchema } from './money';
export const catalogItemVariationSchema = object({
    itemId: ['item_id', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    sku: ['sku', optional(nullable(string()))],
    upc: ['upc', optional(nullable(string()))],
    ordinal: ['ordinal', optional(number())],
    pricingType: ['pricing_type', optional(string())],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    locationOverrides: [
        'location_overrides',
        optional(nullable(array(lazy(() => itemVariationLocationOverridesSchema)))),
    ],
    trackInventory: ['track_inventory', optional(nullable(boolean()))],
    inventoryAlertType: ['inventory_alert_type', optional(string())],
    inventoryAlertThreshold: [
        'inventory_alert_threshold',
        optional(nullable(bigint())),
    ],
    userData: ['user_data', optional(nullable(string()))],
    serviceDuration: ['service_duration', optional(nullable(bigint()))],
    availableForBooking: ['available_for_booking', optional(nullable(boolean()))],
    itemOptionValues: [
        'item_option_values',
        optional(nullable(array(lazy(() => catalogItemOptionValueForItemVariationSchema)))),
    ],
    measurementUnitId: ['measurement_unit_id', optional(nullable(string()))],
    sellable: ['sellable', optional(nullable(boolean()))],
    stockable: ['stockable', optional(nullable(boolean()))],
    imageIds: ['image_ids', optional(nullable(array(string())))],
    teamMemberIds: ['team_member_ids', optional(nullable(array(string())))],
    stockableConversion: [
        'stockable_conversion',
        optional(lazy(() => catalogStockConversionSchema)),
    ],
});
//# sourceMappingURL=catalogItemVariation.js.map
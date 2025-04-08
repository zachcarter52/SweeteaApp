"use strict";
exports.__esModule = true;
exports.catalogItemVariationSchema = void 0;
var schema_1 = require("../schema");
var catalogItemOptionValueForItemVariation_1 = require("./catalogItemOptionValueForItemVariation");
var catalogStockConversion_1 = require("./catalogStockConversion");
var itemVariationLocationOverrides_1 = require("./itemVariationLocationOverrides");
var money_1 = require("./money");
exports.catalogItemVariationSchema = (0, schema_1.object)({
    itemId: ['item_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sku: ['sku', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    upc: ['upc', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.number)())],
    pricingType: ['pricing_type', (0, schema_1.optional)((0, schema_1.string)())],
    priceMoney: ['price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    locationOverrides: [
        'location_overrides',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return itemVariationLocationOverrides_1.itemVariationLocationOverridesSchema; })))),
    ],
    trackInventory: ['track_inventory', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    inventoryAlertType: ['inventory_alert_type', (0, schema_1.optional)((0, schema_1.string)())],
    inventoryAlertThreshold: [
        'inventory_alert_threshold',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)())),
    ],
    userData: ['user_data', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    serviceDuration: ['service_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    availableForBooking: ['available_for_booking', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    itemOptionValues: [
        'item_option_values',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogItemOptionValueForItemVariation_1.catalogItemOptionValueForItemVariationSchema; })))),
    ],
    measurementUnitId: ['measurement_unit_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    sellable: ['sellable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    stockable: ['stockable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    imageIds: ['image_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    teamMemberIds: ['team_member_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    stockableConversion: [
        'stockable_conversion',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return catalogStockConversion_1.catalogStockConversionSchema; })),
    ]
});
//# sourceMappingURL=catalogItemVariation.js.map
"use strict";
exports.__esModule = true;
exports.itemVariationLocationOverridesSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.itemVariationLocationOverridesSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    priceMoney: ['price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    pricingType: ['pricing_type', (0, schema_1.optional)((0, schema_1.string)())],
    trackInventory: ['track_inventory', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    inventoryAlertType: ['inventory_alert_type', (0, schema_1.optional)((0, schema_1.string)())],
    inventoryAlertThreshold: [
        'inventory_alert_threshold',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)())),
    ],
    soldOut: ['sold_out', (0, schema_1.optional)((0, schema_1.boolean)())],
    soldOutValidUntil: ['sold_out_valid_until', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=itemVariationLocationOverrides.js.map
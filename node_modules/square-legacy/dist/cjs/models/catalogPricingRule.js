"use strict";
exports.__esModule = true;
exports.catalogPricingRuleSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.catalogPricingRuleSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    timePeriodIds: ['time_period_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    discountId: ['discount_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    matchProductsId: ['match_products_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    applyProductsId: ['apply_products_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    excludeProductsId: ['exclude_products_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    validFromDate: ['valid_from_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    validFromLocalTime: ['valid_from_local_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    validUntilDate: ['valid_until_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    validUntilLocalTime: ['valid_until_local_time', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    excludeStrategy: ['exclude_strategy', (0, schema_1.optional)((0, schema_1.string)())],
    minimumOrderSubtotalMoney: [
        'minimum_order_subtotal_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    customerGroupIdsAny: [
        'customer_group_ids_any',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ]
});
//# sourceMappingURL=catalogPricingRule.js.map
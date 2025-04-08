"use strict";
exports.__esModule = true;
exports.orderLineItemDiscountSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.orderLineItemDiscountSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    percentage: ['percentage', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    appliedMoney: ['applied_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))],
    scope: ['scope', (0, schema_1.optional)((0, schema_1.string)())],
    rewardIds: ['reward_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    pricingRuleId: ['pricing_rule_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=orderLineItemDiscount.js.map
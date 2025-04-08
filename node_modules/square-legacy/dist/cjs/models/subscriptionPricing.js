"use strict";
exports.__esModule = true;
exports.subscriptionPricingSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.subscriptionPricingSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    discountIds: ['discount_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    priceMoney: ['price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=subscriptionPricing.js.map
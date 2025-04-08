"use strict";
exports.__esModule = true;
exports.subscriptionPhaseSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
var subscriptionPricing_1 = require("./subscriptionPricing");
exports.subscriptionPhaseSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cadence: ['cadence', (0, schema_1.string)()],
    periods: ['periods', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    recurringPriceMoney: [
        'recurring_price_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    pricing: ['pricing', (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscriptionPricing_1.subscriptionPricingSchema; }))]
});
//# sourceMappingURL=subscriptionPhase.js.map
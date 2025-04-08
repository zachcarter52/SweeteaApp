"use strict";
exports.__esModule = true;
exports.createSubscriptionRequestSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
var phase_1 = require("./phase");
var subscriptionSource_1 = require("./subscriptionSource");
exports.createSubscriptionRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.string)()],
    planVariationId: ['plan_variation_id', (0, schema_1.optional)((0, schema_1.string)())],
    customerId: ['customer_id', (0, schema_1.string)()],
    startDate: ['start_date', (0, schema_1.optional)((0, schema_1.string)())],
    canceledDate: ['canceled_date', (0, schema_1.optional)((0, schema_1.string)())],
    taxPercentage: ['tax_percentage', (0, schema_1.optional)((0, schema_1.string)())],
    priceOverrideMoney: [
        'price_override_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    cardId: ['card_id', (0, schema_1.optional)((0, schema_1.string)())],
    timezone: ['timezone', (0, schema_1.optional)((0, schema_1.string)())],
    source: ['source', (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscriptionSource_1.subscriptionSourceSchema; }))],
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        (0, schema_1.optional)((0, schema_1.number)()),
    ],
    phases: ['phases', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return phase_1.phaseSchema; })))]
});
//# sourceMappingURL=createSubscriptionRequest.js.map
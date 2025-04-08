"use strict";
exports.__esModule = true;
exports.subscriptionSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
var phase_1 = require("./phase");
var subscriptionAction_1 = require("./subscriptionAction");
var subscriptionSource_1 = require("./subscriptionSource");
exports.subscriptionSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    planVariationId: ['plan_variation_id', (0, schema_1.optional)((0, schema_1.string)())],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.string)())],
    startDate: ['start_date', (0, schema_1.optional)((0, schema_1.string)())],
    canceledDate: ['canceled_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    chargedThroughDate: ['charged_through_date', (0, schema_1.optional)((0, schema_1.string)())],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    taxPercentage: ['tax_percentage', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    invoiceIds: ['invoice_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    priceOverrideMoney: [
        'price_override_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    version: ['version', (0, schema_1.optional)((0, schema_1.bigint)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    cardId: ['card_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    timezone: ['timezone', (0, schema_1.optional)((0, schema_1.string)())],
    source: ['source', (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscriptionSource_1.subscriptionSourceSchema; }))],
    actions: [
        'actions',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return subscriptionAction_1.subscriptionActionSchema; })))),
    ],
    monthlyBillingAnchorDate: ['monthly_billing_anchor_date', (0, schema_1.optional)((0, schema_1.number)())],
    phases: ['phases', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return phase_1.phaseSchema; })))]
});
//# sourceMappingURL=subscription.js.map
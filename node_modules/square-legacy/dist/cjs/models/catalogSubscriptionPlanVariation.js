"use strict";
exports.__esModule = true;
exports.catalogSubscriptionPlanVariationSchema = void 0;
var schema_1 = require("../schema");
var subscriptionPhase_1 = require("./subscriptionPhase");
exports.catalogSubscriptionPlanVariationSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.string)()],
    phases: ['phases', (0, schema_1.array)((0, schema_1.lazy)(function () { return subscriptionPhase_1.subscriptionPhaseSchema; }))],
    subscriptionPlanId: ['subscription_plan_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)())),
    ],
    canProrate: ['can_prorate', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    successorPlanVariationId: [
        'successor_plan_variation_id',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ]
});
//# sourceMappingURL=catalogSubscriptionPlanVariation.js.map
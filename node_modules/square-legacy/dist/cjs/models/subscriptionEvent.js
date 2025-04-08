"use strict";
exports.__esModule = true;
exports.subscriptionEventSchema = void 0;
var schema_1 = require("../schema");
var phase_1 = require("./phase");
var subscriptionEventInfo_1 = require("./subscriptionEventInfo");
exports.subscriptionEventSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    subscriptionEventType: ['subscription_event_type', (0, schema_1.string)()],
    effectiveDate: ['effective_date', (0, schema_1.string)()],
    monthlyBillingAnchorDate: ['monthly_billing_anchor_date', (0, schema_1.optional)((0, schema_1.number)())],
    info: ['info', (0, schema_1.optional)((0, schema_1.lazy)(function () { return subscriptionEventInfo_1.subscriptionEventInfoSchema; }))],
    phases: ['phases', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return phase_1.phaseSchema; }))))],
    planVariationId: ['plan_variation_id', (0, schema_1.string)()]
});
//# sourceMappingURL=subscriptionEvent.js.map
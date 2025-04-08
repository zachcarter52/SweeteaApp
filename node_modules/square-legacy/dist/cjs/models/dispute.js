"use strict";
exports.__esModule = true;
exports.disputeSchema = void 0;
var schema_1 = require("../schema");
var disputedPayment_1 = require("./disputedPayment");
var money_1 = require("./money");
exports.disputeSchema = (0, schema_1.object)({
    disputeId: ['dispute_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    reason: ['reason', (0, schema_1.optional)((0, schema_1.string)())],
    state: ['state', (0, schema_1.optional)((0, schema_1.string)())],
    dueAt: ['due_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    disputedPayment: [
        'disputed_payment',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return disputedPayment_1.disputedPaymentSchema; })),
    ],
    evidenceIds: ['evidence_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    cardBrand: ['card_brand', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    brandDisputeId: ['brand_dispute_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    reportedDate: ['reported_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    reportedAt: ['reported_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=dispute.js.map
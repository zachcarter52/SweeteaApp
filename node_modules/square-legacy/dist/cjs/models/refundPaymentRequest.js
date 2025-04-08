"use strict";
exports.__esModule = true;
exports.refundPaymentRequestSchema = void 0;
var schema_1 = require("../schema");
var destinationDetailsCashRefundDetails_1 = require("./destinationDetailsCashRefundDetails");
var destinationDetailsExternalRefundDetails_1 = require("./destinationDetailsExternalRefundDetails");
var money_1 = require("./money");
exports.refundPaymentRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    appFeeMoney: ['app_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    destinationId: ['destination_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    unlinked: ['unlinked', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    reason: ['reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    paymentVersionToken: ['payment_version_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    cashDetails: [
        'cash_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return destinationDetailsCashRefundDetails_1.destinationDetailsCashRefundDetailsSchema; })),
    ],
    externalDetails: [
        'external_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return destinationDetailsExternalRefundDetails_1.destinationDetailsExternalRefundDetailsSchema; })),
    ]
});
//# sourceMappingURL=refundPaymentRequest.js.map
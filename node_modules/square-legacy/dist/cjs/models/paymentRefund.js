"use strict";
exports.__esModule = true;
exports.paymentRefundSchema = void 0;
var schema_1 = require("../schema");
var destinationDetails_1 = require("./destinationDetails");
var money_1 = require("./money");
var processingFee_1 = require("./processingFee");
exports.paymentRefundSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    status: ['status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    unlinked: ['unlinked', (0, schema_1.optional)((0, schema_1.boolean)())],
    destinationType: ['destination_type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    destinationDetails: [
        'destination_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return destinationDetails_1.destinationDetailsSchema; })),
    ],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    appFeeMoney: ['app_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    processingFee: [
        'processing_fee',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return processingFee_1.processingFeeSchema; })))),
    ],
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    reason: ['reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.string)())],
    terminalRefundId: ['terminal_refund_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=paymentRefund.js.map
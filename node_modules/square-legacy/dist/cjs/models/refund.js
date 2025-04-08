"use strict";
exports.__esModule = true;
exports.refundSchema = void 0;
var schema_1 = require("../schema");
var additionalRecipient_1 = require("./additionalRecipient");
var money_1 = require("./money");
exports.refundSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    locationId: ['location_id', (0, schema_1.string)()],
    transactionId: ['transaction_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    tenderId: ['tender_id', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    reason: ['reason', (0, schema_1.string)()],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    status: ['status', (0, schema_1.string)()],
    processingFeeMoney: [
        'processing_fee_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    additionalRecipients: [
        'additional_recipients',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return additionalRecipient_1.additionalRecipientSchema; })))),
    ]
});
//# sourceMappingURL=refund.js.map
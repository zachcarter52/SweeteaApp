"use strict";
exports.__esModule = true;
exports.tenderSchema = void 0;
var schema_1 = require("../schema");
var additionalRecipient_1 = require("./additionalRecipient");
var money_1 = require("./money");
var tenderBankAccountDetails_1 = require("./tenderBankAccountDetails");
var tenderBuyNowPayLaterDetails_1 = require("./tenderBuyNowPayLaterDetails");
var tenderCardDetails_1 = require("./tenderCardDetails");
var tenderCashDetails_1 = require("./tenderCashDetails");
var tenderSquareAccountDetails_1 = require("./tenderSquareAccountDetails");
exports.tenderSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    transactionId: ['transaction_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    tipMoney: ['tip_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    processingFeeMoney: [
        'processing_fee_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.string)()],
    cardDetails: ['card_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return tenderCardDetails_1.tenderCardDetailsSchema; }))],
    cashDetails: ['cash_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return tenderCashDetails_1.tenderCashDetailsSchema; }))],
    bankAccountDetails: [
        'bank_account_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return tenderBankAccountDetails_1.tenderBankAccountDetailsSchema; })),
    ],
    buyNowPayLaterDetails: [
        'buy_now_pay_later_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return tenderBuyNowPayLaterDetails_1.tenderBuyNowPayLaterDetailsSchema; })),
    ],
    squareAccountDetails: [
        'square_account_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return tenderSquareAccountDetails_1.tenderSquareAccountDetailsSchema; })),
    ],
    additionalRecipients: [
        'additional_recipients',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return additionalRecipient_1.additionalRecipientSchema; })))),
    ],
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=tender.js.map
"use strict";
exports.__esModule = true;
exports.invoicePaymentRequestSchema = void 0;
var schema_1 = require("../schema");
var invoicePaymentReminder_1 = require("./invoicePaymentReminder");
var money_1 = require("./money");
exports.invoicePaymentRequestSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    requestMethod: ['request_method', (0, schema_1.optional)((0, schema_1.string)())],
    requestType: ['request_type', (0, schema_1.optional)((0, schema_1.string)())],
    dueDate: ['due_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    fixedAmountRequestedMoney: [
        'fixed_amount_requested_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    percentageRequested: ['percentage_requested', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    tippingEnabled: ['tipping_enabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    automaticPaymentSource: ['automatic_payment_source', (0, schema_1.optional)((0, schema_1.string)())],
    cardId: ['card_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    reminders: [
        'reminders',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return invoicePaymentReminder_1.invoicePaymentReminderSchema; })))),
    ],
    computedAmountMoney: [
        'computed_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    totalCompletedAmountMoney: [
        'total_completed_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    roundingAdjustmentIncludedMoney: [
        'rounding_adjustment_included_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ]
});
//# sourceMappingURL=invoicePaymentRequest.js.map
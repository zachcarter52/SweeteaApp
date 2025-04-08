"use strict";
exports.__esModule = true;
exports.paymentSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var applicationDetails_1 = require("./applicationDetails");
var bankAccountPaymentDetails_1 = require("./bankAccountPaymentDetails");
var buyNowPayLaterDetails_1 = require("./buyNowPayLaterDetails");
var cardPaymentDetails_1 = require("./cardPaymentDetails");
var cashPaymentDetails_1 = require("./cashPaymentDetails");
var deviceDetails_1 = require("./deviceDetails");
var digitalWalletDetails_1 = require("./digitalWalletDetails");
var externalPaymentDetails_1 = require("./externalPaymentDetails");
var money_1 = require("./money");
var offlinePaymentDetails_1 = require("./offlinePaymentDetails");
var processingFee_1 = require("./processingFee");
var riskEvaluation_1 = require("./riskEvaluation");
var squareAccountDetails_1 = require("./squareAccountDetails");
exports.paymentSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    tipMoney: ['tip_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalMoney: ['total_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    appFeeMoney: ['app_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    approvedMoney: ['approved_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    processingFee: [
        'processing_fee',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return processingFee_1.processingFeeSchema; }))),
    ],
    refundedMoney: ['refunded_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    delayDuration: ['delay_duration', (0, schema_1.optional)((0, schema_1.string)())],
    delayAction: ['delay_action', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    delayedUntil: ['delayed_until', (0, schema_1.optional)((0, schema_1.string)())],
    sourceType: ['source_type', (0, schema_1.optional)((0, schema_1.string)())],
    cardDetails: ['card_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return cardPaymentDetails_1.cardPaymentDetailsSchema; }))],
    cashDetails: ['cash_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return cashPaymentDetails_1.cashPaymentDetailsSchema; }))],
    bankAccountDetails: [
        'bank_account_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return bankAccountPaymentDetails_1.bankAccountPaymentDetailsSchema; })),
    ],
    externalDetails: [
        'external_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return externalPaymentDetails_1.externalPaymentDetailsSchema; })),
    ],
    walletDetails: [
        'wallet_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return digitalWalletDetails_1.digitalWalletDetailsSchema; })),
    ],
    buyNowPayLaterDetails: [
        'buy_now_pay_later_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return buyNowPayLaterDetails_1.buyNowPayLaterDetailsSchema; })),
    ],
    squareAccountDetails: [
        'square_account_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return squareAccountDetails_1.squareAccountDetailsSchema; })),
    ],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.string)())],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.string)())],
    employeeId: ['employee_id', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    refundIds: ['refund_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    riskEvaluation: [
        'risk_evaluation',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return riskEvaluation_1.riskEvaluationSchema; })),
    ],
    terminalCheckoutId: ['terminal_checkout_id', (0, schema_1.optional)((0, schema_1.string)())],
    buyerEmailAddress: ['buyer_email_address', (0, schema_1.optional)((0, schema_1.string)())],
    billingAddress: ['billing_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    shippingAddress: ['shipping_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    note: ['note', (0, schema_1.optional)((0, schema_1.string)())],
    statementDescriptionIdentifier: [
        'statement_description_identifier',
        (0, schema_1.optional)((0, schema_1.string)()),
    ],
    capabilities: ['capabilities', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    receiptNumber: ['receipt_number', (0, schema_1.optional)((0, schema_1.string)())],
    receiptUrl: ['receipt_url', (0, schema_1.optional)((0, schema_1.string)())],
    deviceDetails: ['device_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return deviceDetails_1.deviceDetailsSchema; }))],
    applicationDetails: [
        'application_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return applicationDetails_1.applicationDetailsSchema; })),
    ],
    isOfflinePayment: ['is_offline_payment', (0, schema_1.optional)((0, schema_1.boolean)())],
    offlinePaymentDetails: [
        'offline_payment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return offlinePaymentDetails_1.offlinePaymentDetailsSchema; })),
    ],
    versionToken: ['version_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=payment.js.map
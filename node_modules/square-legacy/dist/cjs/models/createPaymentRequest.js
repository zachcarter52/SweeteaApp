"use strict";
exports.__esModule = true;
exports.createPaymentRequestSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var cashPaymentDetails_1 = require("./cashPaymentDetails");
var customerDetails_1 = require("./customerDetails");
var externalPaymentDetails_1 = require("./externalPaymentDetails");
var money_1 = require("./money");
var offlinePaymentDetails_1 = require("./offlinePaymentDetails");
exports.createPaymentRequestSchema = (0, schema_1.object)({
    sourceId: ['source_id', (0, schema_1.string)()],
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    tipMoney: ['tip_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    appFeeMoney: ['app_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    delayDuration: ['delay_duration', (0, schema_1.optional)((0, schema_1.string)())],
    delayAction: ['delay_action', (0, schema_1.optional)((0, schema_1.string)())],
    autocomplete: ['autocomplete', (0, schema_1.optional)((0, schema_1.boolean)())],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.string)())],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.string)())],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.string)())],
    teamMemberId: ['team_member_id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.string)())],
    verificationToken: ['verification_token', (0, schema_1.optional)((0, schema_1.string)())],
    acceptPartialAuthorization: [
        'accept_partial_authorization',
        (0, schema_1.optional)((0, schema_1.boolean)()),
    ],
    buyerEmailAddress: ['buyer_email_address', (0, schema_1.optional)((0, schema_1.string)())],
    buyerPhoneNumber: ['buyer_phone_number', (0, schema_1.optional)((0, schema_1.string)())],
    billingAddress: ['billing_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    shippingAddress: ['shipping_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    note: ['note', (0, schema_1.optional)((0, schema_1.string)())],
    statementDescriptionIdentifier: [
        'statement_description_identifier',
        (0, schema_1.optional)((0, schema_1.string)()),
    ],
    cashDetails: ['cash_details', (0, schema_1.optional)((0, schema_1.lazy)(function () { return cashPaymentDetails_1.cashPaymentDetailsSchema; }))],
    externalDetails: [
        'external_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return externalPaymentDetails_1.externalPaymentDetailsSchema; })),
    ],
    customerDetails: [
        'customer_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerDetails_1.customerDetailsSchema; })),
    ],
    offlinePaymentDetails: [
        'offline_payment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return offlinePaymentDetails_1.offlinePaymentDetailsSchema; })),
    ]
});
//# sourceMappingURL=createPaymentRequest.js.map
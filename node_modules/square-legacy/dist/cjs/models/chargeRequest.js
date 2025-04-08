"use strict";
exports.__esModule = true;
exports.chargeRequestSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var chargeRequestAdditionalRecipient_1 = require("./chargeRequestAdditionalRecipient");
var money_1 = require("./money");
exports.chargeRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    cardNonce: ['card_nonce', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerCardId: ['customer_card_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    delayCapture: ['delay_capture', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    note: ['note', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    customerId: ['customer_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    billingAddress: ['billing_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    shippingAddress: ['shipping_address', (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; }))],
    buyerEmailAddress: ['buyer_email_address', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    orderId: ['order_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    additionalRecipients: [
        'additional_recipients',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return chargeRequestAdditionalRecipient_1.chargeRequestAdditionalRecipientSchema; })))),
    ],
    verificationToken: ['verification_token', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=chargeRequest.js.map
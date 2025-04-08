"use strict";
exports.__esModule = true;
exports.createCheckoutRequestSchema = void 0;
var schema_1 = require("../schema");
var address_1 = require("./address");
var chargeRequestAdditionalRecipient_1 = require("./chargeRequestAdditionalRecipient");
var createOrderRequest_1 = require("./createOrderRequest");
exports.createCheckoutRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    order: ['order', (0, schema_1.lazy)(function () { return createOrderRequest_1.createOrderRequestSchema; })],
    askForShippingAddress: ['ask_for_shipping_address', (0, schema_1.optional)((0, schema_1.boolean)())],
    merchantSupportEmail: ['merchant_support_email', (0, schema_1.optional)((0, schema_1.string)())],
    prePopulateBuyerEmail: ['pre_populate_buyer_email', (0, schema_1.optional)((0, schema_1.string)())],
    prePopulateShippingAddress: [
        'pre_populate_shipping_address',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; })),
    ],
    redirectUrl: ['redirect_url', (0, schema_1.optional)((0, schema_1.string)())],
    additionalRecipients: [
        'additional_recipients',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return chargeRequestAdditionalRecipient_1.chargeRequestAdditionalRecipientSchema; }))),
    ],
    note: ['note', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=createCheckoutRequest.js.map
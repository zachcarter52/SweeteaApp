"use strict";
exports.__esModule = true;
exports.checkoutSchema = void 0;
var schema_1 = require("../schema");
var additionalRecipient_1 = require("./additionalRecipient");
var address_1 = require("./address");
var order_1 = require("./order");
exports.checkoutSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    checkoutPageUrl: ['checkout_page_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    askForShippingAddress: [
        'ask_for_shipping_address',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    merchantSupportEmail: [
        'merchant_support_email',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    prePopulateBuyerEmail: [
        'pre_populate_buyer_email',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    prePopulateShippingAddress: [
        'pre_populate_shipping_address',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return address_1.addressSchema; })),
    ],
    redirectUrl: ['redirect_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    order: ['order', (0, schema_1.optional)((0, schema_1.lazy)(function () { return order_1.orderSchema; }))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    additionalRecipients: [
        'additional_recipients',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return additionalRecipient_1.additionalRecipientSchema; })))),
    ]
});
//# sourceMappingURL=checkout.js.map
"use strict";
exports.__esModule = true;
exports.checkoutOptionsSchema = void 0;
var schema_1 = require("../schema");
var acceptedPaymentMethods_1 = require("./acceptedPaymentMethods");
var customField_1 = require("./customField");
var money_1 = require("./money");
var shippingFee_1 = require("./shippingFee");
exports.checkoutOptionsSchema = (0, schema_1.object)({
    allowTipping: ['allow_tipping', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    customFields: [
        'custom_fields',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return customField_1.customFieldSchema; })))),
    ],
    subscriptionPlanId: ['subscription_plan_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    redirectUrl: ['redirect_url', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    merchantSupportEmail: [
        'merchant_support_email',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    askForShippingAddress: [
        'ask_for_shipping_address',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    acceptedPaymentMethods: [
        'accepted_payment_methods',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return acceptedPaymentMethods_1.acceptedPaymentMethodsSchema; })),
    ],
    appFeeMoney: ['app_fee_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    shippingFee: ['shipping_fee', (0, schema_1.optional)((0, schema_1.lazy)(function () { return shippingFee_1.shippingFeeSchema; }))],
    enableCoupon: ['enable_coupon', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    enableLoyalty: ['enable_loyalty', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=checkoutOptions.js.map
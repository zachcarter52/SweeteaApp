"use strict";
exports.__esModule = true;
exports.checkoutMerchantSettingsPaymentMethodsSchema = void 0;
var schema_1 = require("../schema");
var checkoutMerchantSettingsPaymentMethodsAfterpayClearpay_1 = require("./checkoutMerchantSettingsPaymentMethodsAfterpayClearpay");
var checkoutMerchantSettingsPaymentMethodsPaymentMethod_1 = require("./checkoutMerchantSettingsPaymentMethodsPaymentMethod");
exports.checkoutMerchantSettingsPaymentMethodsSchema = (0, schema_1.object)({
    applePay: [
        'apple_pay',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutMerchantSettingsPaymentMethodsPaymentMethod_1.checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema; })),
    ],
    googlePay: [
        'google_pay',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutMerchantSettingsPaymentMethodsPaymentMethod_1.checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema; })),
    ],
    cashApp: [
        'cash_app',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutMerchantSettingsPaymentMethodsPaymentMethod_1.checkoutMerchantSettingsPaymentMethodsPaymentMethodSchema; })),
    ],
    afterpayClearpay: [
        'afterpay_clearpay',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutMerchantSettingsPaymentMethodsAfterpayClearpay_1.checkoutMerchantSettingsPaymentMethodsAfterpayClearpaySchema; })),
    ]
});
//# sourceMappingURL=checkoutMerchantSettingsPaymentMethods.js.map
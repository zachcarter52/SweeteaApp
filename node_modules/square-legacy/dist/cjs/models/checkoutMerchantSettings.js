"use strict";
exports.__esModule = true;
exports.checkoutMerchantSettingsSchema = void 0;
var schema_1 = require("../schema");
var checkoutMerchantSettingsPaymentMethods_1 = require("./checkoutMerchantSettingsPaymentMethods");
exports.checkoutMerchantSettingsSchema = (0, schema_1.object)({
    paymentMethods: [
        'payment_methods',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return checkoutMerchantSettingsPaymentMethods_1.checkoutMerchantSettingsPaymentMethodsSchema; })),
    ],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=checkoutMerchantSettings.js.map
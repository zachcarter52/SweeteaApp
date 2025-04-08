"use strict";
exports.__esModule = true;
exports.acceptedPaymentMethodsSchema = void 0;
var schema_1 = require("../schema");
exports.acceptedPaymentMethodsSchema = (0, schema_1.object)({
    applePay: ['apple_pay', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    googlePay: ['google_pay', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    cashAppPay: ['cash_app_pay', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    afterpayClearpay: ['afterpay_clearpay', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=acceptedPaymentMethods.js.map
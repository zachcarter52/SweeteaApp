"use strict";
exports.__esModule = true;
exports.invoiceAcceptedPaymentMethodsSchema = void 0;
var schema_1 = require("../schema");
exports.invoiceAcceptedPaymentMethodsSchema = (0, schema_1.object)({
    card: ['card', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    squareGiftCard: ['square_gift_card', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    bankAccount: ['bank_account', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    buyNowPayLater: ['buy_now_pay_later', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    cashAppPay: ['cash_app_pay', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=invoiceAcceptedPaymentMethods.js.map
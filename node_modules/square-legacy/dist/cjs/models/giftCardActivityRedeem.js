"use strict";
exports.__esModule = true;
exports.giftCardActivityRedeemSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardActivityRedeemSchema = (0, schema_1.object)({
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=giftCardActivityRedeem.js.map
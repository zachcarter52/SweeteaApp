"use strict";
exports.__esModule = true;
exports.giftCardActivityRefundSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardActivityRefundSchema = (0, schema_1.object)({
    redeemActivityId: ['redeem_activity_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=giftCardActivityRefund.js.map
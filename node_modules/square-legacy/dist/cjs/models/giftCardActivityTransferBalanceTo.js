"use strict";
exports.__esModule = true;
exports.giftCardActivityTransferBalanceToSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardActivityTransferBalanceToSchema = (0, schema_1.object)({
    transferFromGiftCardId: ['transfer_from_gift_card_id', (0, schema_1.string)()],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })]
});
//# sourceMappingURL=giftCardActivityTransferBalanceTo.js.map
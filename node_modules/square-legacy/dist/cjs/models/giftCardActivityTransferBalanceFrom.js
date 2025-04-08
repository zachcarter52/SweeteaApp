"use strict";
exports.__esModule = true;
exports.giftCardActivityTransferBalanceFromSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.giftCardActivityTransferBalanceFromSchema = (0, schema_1.object)({
    transferToGiftCardId: ['transfer_to_gift_card_id', (0, schema_1.string)()],
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })]
});
//# sourceMappingURL=giftCardActivityTransferBalanceFrom.js.map
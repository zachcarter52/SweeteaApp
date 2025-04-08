"use strict";
exports.__esModule = true;
exports.cashPaymentDetailsSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.cashPaymentDetailsSchema = (0, schema_1.object)({
    buyerSuppliedMoney: ['buyer_supplied_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    changeBackMoney: ['change_back_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=cashPaymentDetails.js.map
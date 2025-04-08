"use strict";
exports.__esModule = true;
exports.tenderCashDetailsSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.tenderCashDetailsSchema = (0, schema_1.object)({
    buyerTenderedMoney: [
        'buyer_tendered_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    changeBackMoney: ['change_back_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=tenderCashDetails.js.map
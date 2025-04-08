"use strict";
exports.__esModule = true;
exports.orderMoneyAmountsSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.orderMoneyAmountsSchema = (0, schema_1.object)({
    totalMoney: ['total_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    taxMoney: ['tax_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    discountMoney: ['discount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    tipMoney: ['tip_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    serviceChargeMoney: [
        'service_charge_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ]
});
//# sourceMappingURL=orderMoneyAmounts.js.map
"use strict";
exports.__esModule = true;
exports.payoutFeeSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.payoutFeeSchema = (0, schema_1.object)({
    amountMoney: ['amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    effectiveAt: ['effective_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=payoutFee.js.map
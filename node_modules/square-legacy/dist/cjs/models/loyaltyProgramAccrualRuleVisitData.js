"use strict";
exports.__esModule = true;
exports.loyaltyProgramAccrualRuleVisitDataSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.loyaltyProgramAccrualRuleVisitDataSchema = (0, schema_1.object)({
    minimumAmountMoney: [
        'minimum_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    taxMode: ['tax_mode', (0, schema_1.string)()]
});
//# sourceMappingURL=loyaltyProgramAccrualRuleVisitData.js.map
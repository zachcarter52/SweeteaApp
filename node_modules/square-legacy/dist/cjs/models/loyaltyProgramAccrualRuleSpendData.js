"use strict";
exports.__esModule = true;
exports.loyaltyProgramAccrualRuleSpendDataSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.loyaltyProgramAccrualRuleSpendDataSchema = (0, schema_1.object)({
    amountMoney: ['amount_money', (0, schema_1.lazy)(function () { return money_1.moneySchema; })],
    excludedCategoryIds: [
        'excluded_category_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    excludedItemVariationIds: [
        'excluded_item_variation_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    taxMode: ['tax_mode', (0, schema_1.string)()]
});
//# sourceMappingURL=loyaltyProgramAccrualRuleSpendData.js.map
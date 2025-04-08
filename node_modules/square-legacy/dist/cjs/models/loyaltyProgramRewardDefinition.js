"use strict";
exports.__esModule = true;
exports.loyaltyProgramRewardDefinitionSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.loyaltyProgramRewardDefinitionSchema = (0, schema_1.object)({
    scope: ['scope', (0, schema_1.string)()],
    discountType: ['discount_type', (0, schema_1.string)()],
    percentageDiscount: ['percentage_discount', (0, schema_1.optional)((0, schema_1.string)())],
    catalogObjectIds: ['catalog_object_ids', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    fixedDiscountMoney: [
        'fixed_discount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    maxDiscountMoney: ['max_discount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=loyaltyProgramRewardDefinition.js.map
"use strict";
exports.__esModule = true;
exports.loyaltyProgramAccrualRuleSchema = void 0;
var schema_1 = require("../schema");
var loyaltyProgramAccrualRuleCategoryData_1 = require("./loyaltyProgramAccrualRuleCategoryData");
var loyaltyProgramAccrualRuleItemVariationData_1 = require("./loyaltyProgramAccrualRuleItemVariationData");
var loyaltyProgramAccrualRuleSpendData_1 = require("./loyaltyProgramAccrualRuleSpendData");
var loyaltyProgramAccrualRuleVisitData_1 = require("./loyaltyProgramAccrualRuleVisitData");
exports.loyaltyProgramAccrualRuleSchema = (0, schema_1.object)({
    accrualType: ['accrual_type', (0, schema_1.string)()],
    points: ['points', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    visitData: [
        'visit_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyProgramAccrualRuleVisitData_1.loyaltyProgramAccrualRuleVisitDataSchema; })),
    ],
    spendData: [
        'spend_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyProgramAccrualRuleSpendData_1.loyaltyProgramAccrualRuleSpendDataSchema; })),
    ],
    itemVariationData: [
        'item_variation_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyProgramAccrualRuleItemVariationData_1.loyaltyProgramAccrualRuleItemVariationDataSchema; })),
    ],
    categoryData: [
        'category_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyProgramAccrualRuleCategoryData_1.loyaltyProgramAccrualRuleCategoryDataSchema; })),
    ]
});
//# sourceMappingURL=loyaltyProgramAccrualRule.js.map
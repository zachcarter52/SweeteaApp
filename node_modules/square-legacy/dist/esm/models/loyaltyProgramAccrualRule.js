import { lazy, nullable, number, object, optional, string, } from '../schema';
import { loyaltyProgramAccrualRuleCategoryDataSchema, } from './loyaltyProgramAccrualRuleCategoryData';
import { loyaltyProgramAccrualRuleItemVariationDataSchema, } from './loyaltyProgramAccrualRuleItemVariationData';
import { loyaltyProgramAccrualRuleSpendDataSchema, } from './loyaltyProgramAccrualRuleSpendData';
import { loyaltyProgramAccrualRuleVisitDataSchema, } from './loyaltyProgramAccrualRuleVisitData';
export const loyaltyProgramAccrualRuleSchema = object({
    accrualType: ['accrual_type', string()],
    points: ['points', optional(nullable(number()))],
    visitData: [
        'visit_data',
        optional(lazy(() => loyaltyProgramAccrualRuleVisitDataSchema)),
    ],
    spendData: [
        'spend_data',
        optional(lazy(() => loyaltyProgramAccrualRuleSpendDataSchema)),
    ],
    itemVariationData: [
        'item_variation_data',
        optional(lazy(() => loyaltyProgramAccrualRuleItemVariationDataSchema)),
    ],
    categoryData: [
        'category_data',
        optional(lazy(() => loyaltyProgramAccrualRuleCategoryDataSchema)),
    ],
});
//# sourceMappingURL=loyaltyProgramAccrualRule.js.map